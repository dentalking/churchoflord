export function Footer() {
    return (
      <footer className="border-t py-8 mt-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">주님의교회</h3>
              <p className="text-sm">
                경상북도 경주시 내남면 내외로 2175<br />
                전화: 000-000-0000<br />
                이메일: church@example.com
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">예배 시간</h3>
              <p className="text-sm">
                새벽기도회: 매일 오전 5시<br />
                수요기도회: 오후 2시<br />
                금요기도회: 오후 2시<br />
                주일예배: 오전 11시<br />
                주일찬양예배: 오후 2시
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">콩과나무로</h3>
              <p className="text-sm">
                건강하고 자연 친화적인 제품으로<br />
                나눔과 섬김을 실천합니다.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} 주님의교회. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }