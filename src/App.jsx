import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-950">
      <section className="mx-auto flex w-full max-w-[420px] flex-col gap-5">
        <header className="space-y-2">
          <p className="text-sm font-medium text-emerald-600">Diet Tracker</p>
          <h1 className="text-3xl font-bold tracking-tight">식단 관리</h1>
          <p className="text-sm leading-6 text-slate-500">
            오늘의 식사와 날짜별 기록을 한눈에 확인하세요.
          </p>
        </header>

        <Card className="p-5">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="record-date">기록 날짜</Label>
              <Input id="record-date" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="meal-summary">식단 메모</Label>
              <Input id="meal-summary" placeholder="예: 닭가슴살 샐러드, 고구마" />
            </div>

            <Button className="w-full" disabled>
              기록 추가
            </Button>
          </div>
        </Card>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">날짜별 기록 목록</h2>
            <span className="text-sm text-slate-400">0개</span>
          </div>

          <Card className="border-dashed p-6">
            <div className="flex min-h-32 flex-col items-center justify-center gap-2 text-center">
              <p className="font-medium text-slate-700">아직 기록이 없습니다.</p>
              <p className="text-sm leading-6 text-slate-500">
                식단 기록을 추가하면 날짜별로 이곳에 표시됩니다.
              </p>
            </div>
          </Card>
        </section>
      </section>
    </main>
  )
}

export default App
