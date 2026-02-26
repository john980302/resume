import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail, Download, ExternalLink } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <main className="max-w-3xl mx-auto px-6 py-20 sm:py-32 space-y-24">
        
        {/* 1. Hero / Contact Section */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              우진 <span className="text-zinc-400 dark:text-zinc-500 font-normal">Woojin</span>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 font-medium tracking-tight">
              사용자 중심의 프로덕트를 만드는 소프트웨어 엔지니어입니다.
            </p>
            <p className="text-zinc-500 dark:text-zinc-500 max-w-xl leading-relaxed">
              복잡한 문제를 단순하게 해결하는 것을 좋아하며, 직관적이고 빠른 UI/UX를 구현하는 데 관심이 많습니다. 비즈니스 임팩트를 창출하는 코드를 작성하고자 노력합니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild className="rounded-full shadow-sm hover:scale-105 transition-transform">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume PDF
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-full shadow-sm bg-white dark:bg-zinc-950 hover:scale-105 transition-transform">
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-full shadow-sm bg-white dark:bg-zinc-950 hover:scale-105 transition-transform">
              <a href="mailto:email@example.com">
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
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Node.js", "Git"].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm rounded-full font-medium bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-none transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* 3. Experience */}
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 ease-out fill-mode-both">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="grid sm:grid-cols-[1fr_3fr] gap-2 sm:gap-6">
              <div className="text-sm text-zinc-500 mt-1">2022.03 - Present</div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">프론트엔드 엔지니어 @ Tech Company</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  • 사내 백오피스 시스템 프론트엔드 아키텍처 설계 및 개발<br />
                  • React Query를 활용한 상태 관리 최적화로 페이지 로딩 속도 40% 개선<br />
                  • 디자인 시스템 구축 및 shadcn UI 기반 컴포넌트 라이브러리 사내 배포
                </p>
              </div>
            </div>
            
            {/* Experience Item 2 */}
            <div className="grid sm:grid-cols-[1fr_3fr] gap-2 sm:gap-6">
              <div className="text-sm text-zinc-500 mt-1">2020.01 - 2022.02</div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">웹 개발자 @ Startup</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  • 자사 서비스 랜딩 페이지 초기 개발 및 SEO 최적화<br />
                  • Vue.js에서 React로의 마이그레이션 프로젝트 주도<br />
                  • 사용자 피드백을 바탕으로 UI/UX 개선 인프라 구축
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Projects */}
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 ease-out fill-mode-both">
          <h2 className="text-2xl font-semibold tracking-tight">Key Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Project Card 1 */}
            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-medium">프로젝트 A</CardTitle>
                    <CardDescription>실시간 데이터 시각화 대시보드</CardDescription>
                  </div>
                  <a href="#" className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  웹소켓을 이용하여 서버 데이터를 실시간으로 차트에 렌더링하는 대시보드를 구축했습니다. 대량의 데이터 처리 성능을 최적화했습니다.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-xs font-normal text-zinc-500 border-zinc-200 dark:border-zinc-800">Next.js</Badge>
                  <Badge variant="outline" className="text-xs font-normal text-zinc-500 border-zinc-200 dark:border-zinc-800">Recharts</Badge>
                  <Badge variant="outline" className="text-xs font-normal text-zinc-500 border-zinc-200 dark:border-zinc-800">Socket.io</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-medium">프로젝트 B</CardTitle>
                    <CardDescription>이커머스 결제 시스템 개편</CardDescription>
                  </div>
                  <a href="#" className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  레거시 결제 시스템을 현대화하여 다양한 결제 수단을 연동하고, 사용자 이탈률을 15% 감소시키는 데 기여했습니다.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-xs font-normal text-zinc-500 border-zinc-200 dark:border-zinc-800">React</Badge>
                  <Badge variant="outline" className="text-xs font-normal text-zinc-500 border-zinc-200 dark:border-zinc-800">TypeScript</Badge>
                  <Badge variant="outline" className="text-xs font-normal text-zinc-500 border-zinc-200 dark:border-zinc-800">Zustand</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 pb-8 text-center text-sm text-zinc-500 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-700 ease-out fill-mode-both">
          <p>© {new Date().getFullYear()} Woojin. All rights reserved.</p>
          <p className="mt-1">Built with Next.js & shadcn/ui</p>
        </footer>

      </main>
    </div>
  );
}
