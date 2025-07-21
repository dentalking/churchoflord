"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Trash2, Edit, Plus, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Product } from "@/types/database";
import Image from "next/image";

interface ContentManagerProps {
  adminPassword: string;
}

export default function ContentManager({ adminPassword }: ContentManagerProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // 제품 폼 상태
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  
  // 업로드된 이미지 미리보기
  const [previewUrl, setPreviewUrl] = useState("");

  // 제품 목록 불러오기
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/products');
      const data = await response.json();
      if (data.data) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('제품 목록을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 이미지 업로드 처리
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 파일 크기 체크 (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('파일 크기는 5MB 이하여야 합니다.');
      return;
    }

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('bucket', 'product-images');
      formData.append('folder', 'products');

      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'x-admin-password': adminPassword
        },
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        setProductImageUrl(data.url);
        setPreviewUrl(data.url);
        alert('이미지가 업로드되었습니다!');
      } else {
        alert('이미지 업로드에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('이미지 업로드 중 오류가 발생했습니다.');
    } finally {
      setUploading(false);
    }
  };

  // 제품 저장
  const handleProductSubmit = async () => {
    if (!productName || !productPrice) {
      alert('제품명과 가격은 필수입니다.');
      return;
    }

    try {
      const method = editingProductId ? 'PUT' : 'POST';
      const body = {
        id: editingProductId,
        name: productName,
        description: productDescription,
        imageUrl: productImageUrl,
        price: parseInt(productPrice) || 0,
        isAvailable: true
      };

      const response = await fetch('/api/products', {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        alert(editingProductId ? '제품이 수정되었습니다!' : '제품이 추가되었습니다!');
        resetForm();
        fetchProducts();
      } else {
        alert('저장에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error saving product:', error);
      alert('저장 중 오류가 발생했습니다.');
    }
  };

  // 제품 삭제
  const handleProductDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const response = await fetch(`/api/products?id=${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (response.ok) {
        alert('제품이 삭제되었습니다.');
        fetchProducts();
      } else {
        alert('삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  // 수정 모드로 전환
  const handleProductEdit = (product: Product) => {
    setEditingProductId(product.id);
    setProductName(product.name);
    setProductDescription(product.description || '');
    setProductPrice(product.price.toString());
    setProductImageUrl(product.image_url || '');
    setPreviewUrl(product.image_url || '');
  };

  // 폼 초기화
  const resetForm = () => {
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductImageUrl('');
    setPreviewUrl('');
    setEditingProductId(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6">
      {/* 제품 추가/수정 폼 */}
      <Card>
        <CardHeader>
          <CardTitle>{editingProductId ? '제품 수정' : '새 제품 추가'}</CardTitle>
          <CardDescription>
            콩과나무로 프로젝트의 제품을 추가하거나 수정하세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="product-name">제품명 *</Label>
                <Input
                  id="product-name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="예: 유기농 콩나물"
                />
              </div>

              <div>
                <Label htmlFor="product-price">가격 (원) *</Label>
                <Input
                  id="product-price"
                  type="number"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  placeholder="예: 3000"
                />
              </div>

              <div>
                <Label htmlFor="product-description">설명</Label>
                <Textarea
                  id="product-description"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  placeholder="제품에 대한 설명을 입력하세요"
                  rows={4}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label>제품 이미지</Label>
                <div className="space-y-2">
                  {previewUrl && (
                    <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={previewUrl}
                        alt="제품 미리보기"
                        fill
                        className="object-cover"
                      />
                      <Button
                        size="sm"
                        variant="destructive"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          setPreviewUrl('');
                          setProductImageUrl('');
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="w-full"
                  >
                    {uploading ? (
                      '업로드 중...'
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        이미지 선택
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleProductSubmit} className="flex-1">
              {editingProductId ? '수정하기' : '제품 추가'}
            </Button>
            {editingProductId && (
              <Button onClick={resetForm} variant="outline">
                취소
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 제품 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>제품 목록</CardTitle>
          <CardDescription>
            등록된 콩과나무로 제품을 관리하세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-center py-4">불러오는 중...</p>
          ) : products.length === 0 ? (
            <p className="text-center py-4 text-gray-500">등록된 제품이 없습니다.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>이미지</TableHead>
                  <TableHead>제품명</TableHead>
                  <TableHead>가격</TableHead>
                  <TableHead>설명</TableHead>
                  <TableHead>등록일</TableHead>
                  <TableHead className="text-right">관리</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      {product.image_url ? (
                        <div className="relative w-16 h-16 bg-gray-100 rounded overflow-hidden">
                          <Image
                            src={product.image_url}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                          <span className="text-gray-400 text-xs">이미지 없음</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.price.toLocaleString()}원</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {product.description || '-'}
                    </TableCell>
                    <TableCell>
                      {new Date(product.created_at).toLocaleDateString('ko-KR')}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleProductEdit(product)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleProductDelete(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}