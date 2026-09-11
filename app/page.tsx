'use client'

import { ArrowLeft, BookOpen, CheckCircle2, ChevronLeft, GraduationCap, Menu, MessageCircle, Moon, PlayCircle, Search, Sparkles, Trophy, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const instructor = { englishName: 'Ahmed El Gohary', arabicName: 'أحمد الجوهري' }

const courses = [
  { title: 'الجبر والدوال', grade: 'الصف الأول الثانوي', lessons: '32 درس', price: '299 ج.م', accent: 'bg-[#d8e52f]', mark: 'x² + 4x + 4' },
  { title: 'الهندسة التحليلية', grade: 'الصف الثاني الثانوي', lessons: '28 درس', price: '349 ج.م', accent: 'bg-[#f2a33a]', mark: 'y = mx + b' },
  { title: 'التفاضل والتكامل', grade: 'الصف الثالث الثانوي', lessons: '41 درس', price: '399 ج.م', accent: 'bg-[#79a85b]', mark: '∫ f(x) dx' },
]

const reasons = [
  { icon: PlayCircle, title: 'شرح بسيط وواضح', text: 'فيديوهات قصيرة تشرح أصعب أفكار الرياضيات بطريقة سهلة.' },
  { icon: CheckCircle2, title: 'تدريب بعد كل درس', text: 'أسئلة متدرجة تساعدك تتأكد إنك فهمت وتثبت المعلومة.' },
  { icon: Trophy, title: 'تابع تقدمك', text: 'لوحة متابعة تعرفك وصلت لفين وإيه خطوتك الجاية.' },
]

export default function Page() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#050705] text-[#f6f4e9]">
      <header className="relative z-20 border-b border-[#385133] bg-[#080c08]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-full border-2 border-[#d8e52f] text-lg font-black text-[#d8e52f]">لـ</div>
            <div><p className="text-lg font-black tracking-tight">Learnova</p><p className="text-[11px] text-[#9da795]">رياضيات بشكل مختلف</p></div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-[#c5cdb8] md:flex"><a href="#courses" className="hover:text-[#d8e52f]">الكورسات</a><a href="#why" className="hover:text-[#d8e52f]">لماذا Learnova؟</a><a href="#teacher" className="hover:text-[#d8e52f]">عن المدرس</a></nav>
          <div className="flex items-center gap-2"><Button variant="outline" className="hidden border-[#d8e52f] bg-transparent text-[#d8e52f] hover:bg-[#d8e52f] hover:text-[#050705] sm:inline-flex">تسجيل الدخول</Button><Button className="bg-[#d8e52f] text-[#050705] hover:bg-[#f2a33a]">ابدأ الآن</Button><button aria-label="بحث" className="p-2 text-[#d8e52f]"><Search /></button><button aria-label="فتح القائمة" className="p-2 text-[#d8e52f] md:hidden"><Menu /></button><button aria-label="الوضع الليلي" className="hidden rounded-full bg-[#1a2a18] p-2 text-[#d8e52f] lg:block"><Moon /></button></div>
        </div>
      </header>

      <section className="relative border-b border-[#385133] bg-[#274524]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(#78925c_1px,transparent_1px),linear-gradient(90deg,#78925c_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <div className="text-right"><p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#91a86f] bg-[#142715] px-4 py-2 text-xs font-bold text-[#d8e52f]"><Sparkles className="size-4" /> تعلم بذكاء، مش بضغط</p><h1 className="max-w-2xl text-4xl font-black leading-[1.3] tracking-tight sm:text-6xl">الرياضيات مش صعبة،<br /><span className="text-[#d8e52f]">لما تتشرح صح</span></h1><p className="mt-6 max-w-xl text-base leading-8 text-[#d8e5d2] sm:text-lg">مع <strong className="text-white">{instructor.arabicName}</strong> هتفهم الفكرة، تتدرب عليها، وتدخل امتحانك وأنت واثق.</p><div className="mt-8 flex flex-wrap gap-3"><Button size="lg" className="bg-[#f2a33a] font-bold text-[#050705] hover:bg-[#d8e52f]">استكشف الكورسات <ArrowLeft data-icon="inline-end" /></Button><Button size="lg" variant="outline" className="border-[#a6bf8b] bg-transparent text-[#f6f4e9] hover:bg-[#f6f4e9] hover:text-[#274524]">اعرف أكتر</Button></div></div>
          <div className="relative mx-auto w-full max-w-md"><div className="relative rounded-[2rem] border border-[#78925c] bg-[#0b120b] p-5 shadow-2xl"><div className="flex items-center justify-between border-b border-[#263a24] pb-4"><div className="flex items-center gap-2"><div className="size-3 rounded-full bg-[#d8e52f]" /><span className="font-mono text-xs text-[#aab79c]">learnova.math</span></div><BookOpen className="size-5 text-[#d8e52f]" /></div><div className="flex min-h-72 flex-col justify-center gap-6 p-5"><p className="font-mono text-sm text-[#aab79c]">حل المعادلة التالية</p><p dir="ltr" className="text-center font-mono text-4xl font-black text-[#f6f4e9]">2x + 6 = 18</p><div className="flex items-center justify-center gap-3"><span className="rounded-lg bg-[#d8e52f] px-5 py-3 font-mono text-xl font-bold text-[#0a1209]">x = 6</span><CheckCircle2 className="size-6 text-[#d8e52f]" /></div><div className="grid grid-cols-3 gap-2 text-center text-xs text-[#87967d]"><span className="rounded bg-[#172617] p-2">افهم</span><span className="rounded bg-[#172617] p-2">طبّق</span><span className="rounded bg-[#172617] p-2">اتقن</span></div></div></div><div className="absolute -bottom-5 -left-5 rounded-xl bg-[#f2a33a] px-4 py-3 text-sm font-black text-[#050705] shadow-lg">خطوة بخطوة</div></div>
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-2 text-sm font-bold text-[#d8e52f]">ابدأ من مستواك</p><h2 className="text-3xl font-black sm:text-4xl">الكورسات المقترحة</h2><p className="mt-3 text-sm text-[#aab79c]">مسارات منظمة لطلاب الثانوية، من أول سؤال لحد الامتحان.</p></div><Button variant="outline" className="border-[#52734a] text-[#d8e52f] hover:bg-[#d8e52f] hover:text-[#050705]">كل الكورسات <ChevronLeft data-icon="inline-end" /></Button></div><div className="grid gap-5 md:grid-cols-3">{courses.map((course) => <article key={course.title} className="group overflow-hidden rounded-2xl border border-[#263a24] bg-[#101910] transition duration-300 hover:-translate-y-2 hover:border-[#d8e52f] hover:shadow-[0_18px_40px_rgba(216,229,47,.1)]"><div className={`relative flex h-48 items-end justify-between overflow-hidden p-5 ${course.accent}`}><div className="absolute -left-8 -top-12 size-48 rounded-full border-[22px] border-[#050705]/10" /><span dir="ltr" className="relative font-mono text-4xl font-black text-[#050705]/80">{course.mark}</span><span className="relative rounded-full bg-[#050705]/75 px-3 py-1 text-xs font-bold text-[#f6f4e9]">{course.grade}</span></div><div className="p-5"><div className="flex items-center justify-between text-xs text-[#9da795]"><span>{course.lessons}</span><span className="flex items-center gap-1"><Users className="size-3" /> مسار كامل</span></div><h3 className="mt-3 text-xl font-black">{course.title}</h3><p className="mt-2 text-sm leading-7 text-[#aab79c]">شرح عملي، أمثلة محلولة، وواجبات تساعدك تتقدم كل أسبوع.</p><div className="mt-5 flex items-center justify-between"><span className="text-lg font-black text-[#d8e52f]">{course.price}</span><Button size="sm" className="bg-[#527e48] text-white hover:bg-[#d8e52f] hover:text-[#050705]">شوف التفاصيل</Button></div></div></article>)}</div></section>

      <section id="why" className="border-y border-[#263a24] bg-[#111b10] py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-xl text-right"><p className="mb-2 text-sm font-bold text-[#d8e52f]">الطريقة اللي بتفرق</p><h2 className="text-3xl font-black sm:text-4xl">ليه Learnova؟</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{reasons.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-[#30462d] bg-[#182518] p-6 text-right transition hover:border-[#d8e52f] hover:bg-[#20351d]"><div className="mb-7 flex size-12 items-center justify-center rounded-xl bg-[#d8e52f] text-[#142214]"><Icon /></div><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-[#afbcaa]">{text}</p></div>)}</div></div></section>

      <section id="teacher" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid items-center gap-10 rounded-3xl border border-[#385133] bg-[#142214] p-7 sm:p-10 lg:grid-cols-[.7fr_1.3fr]"><div className="flex justify-center"><div className="flex size-40 items-center justify-center rounded-full border-8 border-[#d8e52f] bg-[#314f2b] text-center text-3xl font-black text-[#f6f4e9]">أج</div></div><div className="text-right"><p className="text-sm font-bold text-[#d8e52f]">المدرس اللي هيمشي معاك</p><h2 className="mt-2 text-3xl font-black">{instructor.englishName} <span className="text-[#a9bb96]">— {instructor.arabicName}</span></h2><p className="mt-4 max-w-2xl text-sm leading-8 text-[#b8c5b3]">شرح الرياضيات للثانوية العامة بطريقة عملية، هادئة، ومبنية على فهم السؤال قبل حفظ الحل.</p><div className="mt-6 flex flex-wrap gap-3"><span className="rounded-full bg-[#20351d] px-4 py-2 text-xs font-bold text-[#d8e52f]">رياضيات ثانوي</span><span className="rounded-full bg-[#20351d] px-4 py-2 text-xs font-bold text-[#d8e52f]">شرح منظم</span><span className="rounded-full bg-[#20351d] px-4 py-2 text-xs font-bold text-[#d8e52f]">متابعة مستمرة</span></div></div></div></section>

      <button aria-label="تواصل معنا" className="fixed bottom-6 left-6 z-30 flex size-14 items-center justify-center rounded-full bg-[#d8e52f] text-[#0a1209] shadow-xl transition hover:scale-105"><MessageCircle /></button><footer className="border-t border-[#263a24] bg-[#080c08] py-8"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-[#9da795] lg:px-8"><p>جميع الحقوق محفوظة © 2026 Learnova</p><p>منصة {instructor.englishName} التعليمية</p></div></footer>
    </main>
  )
}
