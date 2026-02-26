import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail, Download, ExternalLink, BookOpen, Link } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 break-keep">
      <main className="max-w-3xl mx-auto px-6 py-20 sm:py-32 space-y-24">
        
        {/* 1. Hero / Contact Section */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              최우진 <span className="text-zinc-400 dark:text-zinc-500 font-normal text-2xl sm:text-3xl">Software Product Engineer</span>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 font-medium tracking-tight">
              현재 <a href="http://www.gomiro.com" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">주식회사 미로</a>에서 AI 기반 Software Product Engineer로 근무하고 있습니다.
            </p>
            <div className="text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed space-y-4">
              <div>
                <strong className="text-zinc-900 dark:text-zinc-50 block mb-1">서비스 기획 및 개발 전 과정 수행</strong>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm sm:text-base">
                  <li>비즈니스 문제를 정의하고 이를 해결하기 위한 S/W 서비스 기획</li>
                  <li>기획 내용을 실제 서비스로 구현하기 위한 전체 개발 프로세스 담당</li>
                  <li>FastAPI 기반 백엔드와 Next.js 기반 프론트엔드로 서비스 전반을 설계·구현</li>
                  <li>요구사항 정의부터 API 설계, 핵심 기능 개발, 배포/운영까지 End-to-End 주도</li>
                  <li>AI 개발 도구를 활용해 반복 작업을 단축하고, 설계/코드 리뷰/테스트로 품질을 확보하며 개발 생산성 향상</li>
                </ul>
              </div>
              <div>
                <strong className="text-zinc-900 dark:text-zinc-50 block mb-1">AI 기반 서비스 전체 아키텍처 설계 및 구현</strong>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm sm:text-base">
                  <li>LLM, RAG 기반 AI 자동화 서비스 기획부터 설계, 개발, 운영까지 전 과정 주도</li>
                  <li>비즈니스 요구사항 분석 후 기술적 해결 방안 도출</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild className="rounded-full shadow-sm hover:scale-105 transition-transform">
              <a href="https://www.notion.so/c12a5ce289ac4aa1a8b195d5dbdee2ce?pvs=21" target="_blank" rel="noopener noreferrer">
                <Link className="mr-2 h-4 w-4" />
                Portfolio
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-full shadow-sm bg-white dark:bg-zinc-950 hover:scale-105 transition-transform">
              <a href="https://github.com/john980302" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-full shadow-sm bg-white dark:bg-zinc-950 hover:scale-105 transition-transform">
              <a href="https://trying-ce-student.tistory.com/" target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2 h-4 w-4" />
                Blog
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-full shadow-sm bg-white dark:bg-zinc-950 hover:scale-105 transition-transform">
              <a href="mailto:john1920@naver.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
        </section>

        {/* 2. Tech Stack */}
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 ease-out fill-mode-both">
          <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "FastAPI", "Python", "PyTorch", "TensorFlow", "LangChain", "Docker", "AWS Lambda"].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm rounded-full font-medium bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-none transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* 3. Work Experiences */}
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 ease-out fill-mode-both">
          <h2 className="text-2xl font-semibold tracking-tight">Work Experience</h2>
          <div className="space-y-12">
            
            {/* MIRO */}
            <div className="grid sm:grid-cols-[1fr_3fr] gap-2 sm:gap-6">
              <div className="text-sm text-zinc-500 mt-1 font-medium">2022.09 - Present</div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">미로 (MIRO)</h3>
                  <p className="text-zinc-500 text-sm mb-4">AI 기반 Software Product Engineer</p>
                  
                  <div className="space-y-6">
                    {/* Project 1 */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-zinc-800 dark:text-zinc-200"><a href="https://livesync.mirolab.kr/" target="_blank" rel="noreferrer" className="hover:underline">네이버 세팅 자동화 서비스</a></h4>
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-5">24.08 - 진행중</Badge>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                        • 네이버 API를 활용하여 네이버 상품 세팅 관리 웹 서비스 개발 (세팅 시간 90% 이상 감소)<br />
                        • Streamlit 프로토타입을 거쳐 Next.js + React + FastAPI 아키텍처로 고도화 구현
                      </p>
                    </div>

                    {/* Project 2 */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-zinc-800 dark:text-zinc-200"><a href="https://liveplus.mirolab.kr" target="_blank" rel="noreferrer" className="hover:underline">네이버 라이브 방송 AI 자동화 서비스</a></h4>
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-5">24.08 - 진행중</Badge>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                        • LLM 모델을 통해 사용자 채팅 자동 인식 및 RAG 방식 활용한 AI 자동 답변 기능 개발 (MD 퍼포먼스 30% 이상 향상)<br />
                        • 자사 제품 정보 Vector DB 구축 및 AI 자동 답변 API(FastAPI) 개발
                      </p>
                    </div>

                    {/* Project 3 */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">CS AI 고객 응대 자동화 시스템 구축</h4>
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-5">23.01 - 23.10</Badge>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                        • CS 요청 고객이 작성한 문의 내용을 CS 데이터셋 기반으로 답변하는 AI 서비스 개발 (CS 인바운드콜 20% 감소)<br />
                        • LangChain RAG 방식을 적용한 LLM 모델을 AWS Lambda Docker 기반 서버리스로 구축
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* 4. Extra Work Experiences */}
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 ease-out fill-mode-both">
          <h2 className="text-2xl font-semibold tracking-tight">Extra Work Experiences</h2>
          <div className="space-y-8">
            
            {/* Graphics AI Lab */}
            <div className="grid sm:grid-cols-[1fr_3fr] gap-2 sm:gap-6">
              <div className="text-sm text-zinc-500 mt-1 font-medium">2018.04 - 2022.08</div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Graphics AI 연구실</h3>
                
                <div className="space-y-6">
                  {/* Thesis */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">석사 졸업논문 연구</h4>
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-5">20.08 - 22.08</Badge>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      • Transformer-xl 기반 AutoEncoder 모델 구현을 통해 3D CAD 생성 정확도 7.8% 개선<br />
                      • 시퀀스 길이가 긴 데이터 학습 및 비정상 출력 후처리 작업 수행
                    </p>
                  </div>

                  {/* IS Tec */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">IS Tec 협업 프로젝트</h4>
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-5">20.08 - 21.08</Badge>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      • CNN-LSTM 모델을 통해 수도계량기 고장 예측 정확도 58% 개선 (Sensors Journal 논문 게재)<br />
                      • 상수도 누수 위치 판단 그래프 기반 알고리즘 설계 및 특허 출원·기술이전<br />
                      • DBSCAN 클러스터링을 활용하여 비정상 데이터 탐지 F1-score 139% 개선
                    </p>
                  </div>

                  {/* Graphics AI Proj */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">Graphics AI 프로젝트</h4>
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-5">19.08 - 21.08</Badge>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      • 계산 기하학 결과(Delaunay Triangluation 등) 예측을 위한 Pointer Network 기반 범용 모델 개발<br />
                      • Self-Attention, Masking 기법 추가로 정확도 134% 개선
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Undergrad */}
            <div className="grid sm:grid-cols-[1fr_3fr] gap-2 sm:gap-6">
              <div className="text-sm text-zinc-500 mt-1 font-medium">2019.08 - 2020.08</div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">컴퓨터공학부 졸업작품</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  • 웨어러블 기기와 오픈 데이터셋을 통한 걸음걸이 데이터 기반 사람 식별 시스템 개발<br />
                  • 데이터 전처리 및 GaitNet 모델 구현 (장려상 수상)
                </p>
              </div>
            </div>
            
          </div>
        </section>

        {/* 5. Activities & Education & Honors */}
        <section className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500 ease-out fill-mode-both">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Activities</h2>
            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50">2024 서울 프롬프톤 우수상</h3>
              <p className="text-zinc-500 text-sm mt-1">2024.07.11 (전체 67팀 참가)</p>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">아이디어: 개인 맞춤형 정책 추천 플랫폼 개발</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-50">인천대학교 대학원</h3>
                  <p className="text-zinc-500 text-sm">컴퓨터공학과 석사 (학점 4.31 / 4.5)</p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">졸업논문: 3D CAD 모델 생성을 위한 딥러닝 모델 연구</p>
                </div>
                <span className="text-sm text-zinc-500 tabular-nums">2020.08 - 2022.08</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-50">인천대학교</h3>
                  <p className="text-zinc-500 text-sm">컴퓨터공학과, 인공지능소프트웨어연계전공 학사 (차석졸업, 학점 4.09 / 4.5)</p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">이수과목: 인공지능딥러닝, 인공지능프로젝트, 알고리즘, 컴퓨터비전, 증강현실</p>
                </div>
                <span className="text-sm text-zinc-500 tabular-nums">2017.03 - 2020.08</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Honors & Awards</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-3 block">논문</h3>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>3D CAD 모델 생성을 위한 딥러닝 모델 연구 (2022, 석사졸업논문)</li>
                  <li>Lee, Jaeseung, Woojin Choi, and Jibum Kim. "A Cost-Effective CNN-LSTM-Based Solution for Predicting Faulty Remote Water Meter Reading Devices in AMI Systems." Sensors 21.18 (2021.09.17): 6229.</li>
                  <li>Lee, Jaeseung, Woojin Choi, and Jibum Kim. "Learning Delaunay Triangulation using Self-attention and Domain Knowledge." arXiv preprint arXiv:2107.01759 (2021.07).</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-3 block">특허</h3>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>들로네 삼각분할을 위한 포인터 네트워크의 학습을 통해 메쉬 구조를 생성할 수 있는 그래픽 처리 장치 및 그 동작 방법 (2021.03)</li>
                  <li>수도 관망 내에서의 누수 여부를 모니터링하는 누수 모니터링 장치 및 그 동작 방법 (2020.11)</li>
                  <li>수도 관망 내에서의 누수 심각도 여부를 모니터링하는 인공지능 기반의 누수 모니터링 장치 및 그 동작 방법 (2020.10, 기술이전)</li>
                  <li>수도 관망 내에서 누수 위치의 판단이 가능한 누수 위치 판단 시스템 장치 및 그 동작 방법 (2020.10, 기술이전)</li>
                  <li>포인터 네트워크에 기초한 들로네 삼각분할을 통해 메쉬 구조를 생성할 수 있는 그래픽 처리 장치 및 방법 (2020.03)</li>
                  <li>포인터 네트워크의 학습을 통해 고품질의 메쉬 구조의 생성을 지원하기 위한 그래픽 처리 장치 및 그 동작 방법 (2019.10)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-3 block">수상</h3>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>2024 서울 프롬프톤 우수상 (2024.07)</li>
                  <li>학부졸업작품 장려상 - 스마트 센서를 이용한 새로운 인증 방식 개발 (2020.08)</li>
                </ul>
              </div>
            </div>
          </div>

        </section>

        {/* Footer */}
        <footer className="pt-20 pb-8 text-center text-sm text-zinc-500 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-700 ease-out fill-mode-both">
          <p>© {new Date().getFullYear()} Woojin Choi. All rights reserved.</p>
          <p className="mt-1 flex items-center justify-center gap-1">
            Built with Next.js & shadcn/ui
          </p>
        </footer>

      </main>
    </div>
  );
}
