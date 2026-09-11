'use client'

import { ChevronLeft, MessageCircle, Moon, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const referenceImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-FrtyLoqNpGU5A3f6etQ9vUCZoa47Yu.jpeg'

const courses = [
  { title: 'كورس الدعامة والحركة + الوراثة', level: 'الصف الثالث الثانوي', image: referenceImage, price: '380.00 جنيه' },
  { title: 'كورس الأحياء السنوي دفعة 2027', level: 'الصف الثالث الثانوي', image: referenceImage, price: '1600.00 جنيه' },
  { title: 'الترم الأول كامل', level: 'الصف الأول الثانوي', image: referenceImage, price: '399 جنيه' },
  { title: 'الجيوكيمياء السنوي', level: 'الصف الثالث الثانوي', image: referenceImage, price: '650.00 جنيه' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050705] text-[#f7f5eb]">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-[#b9cf2d]/60 bg-[#050705]/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3"><div className="flex size-12 items-center justify-center rounded-full border border-[#b9cf2d] text-xl font-black text-[#d5e52d]">أج</div><span className="hidden text-sm font-bold sm:block">منصة أحمد الجوهري</span></div>
          <nav className="hidden items-center gap-8 text-sm text-[#dfe5d2] md:flex"><a href="#courses" className="hover:text-[#d5e52d]">الكورسات</a><a href="#why" className="hover:text-[#d5e52d]">لماذا الجوهري؟</a><a href="#students" className="hover:text-[#d5e52d]">لوحة الشرف</a></nav>
          <div className="flex items-center gap-2"><Button variant="outline" className="border-[#b9cf2d] bg-transparent text-[#d5e52d] hover:bg-[#b9cf2d] hover:text-[#050705]">تسجيل الدخول</Button><Button className="bg-[#d5e52d] text-[#050705] hover:bg-[#f4a637]">حساب جديد</Button><button aria-label="البحث" className="p-2 text-[#dfe5d2]"><Search /></button><button aria-label="الوضع الليلي" className="hidden rounded-full bg-[#263d25] p-2 text-[#d5e52d] sm:block"><Moon /></button></div>
        </div>
      </header>

      <section className="relative isolate flex min-h-[720px] items-end overflow-hidden bg-[#284725] pt-28">
        <div className="absolute inset-y-0 left-0 -z-10 w-[58%] bg-contain bg-left-top bg-no-repeat opacity-85" style={{ backgroundImage: `url(${referenceImage})` }} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#284725]/95 via-[#284725]/30 to-[#050705]/65" />
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-20 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:px-8">
          <div className="order-2 max-w-md text-right lg:order-1"><h2 className="text-2xl font-bold text-[#f7f5eb]">منصة الجوهري</h2><p className="mt-4 text-sm leading-8 text-[#dfe5d2]">أكبر منصة تعليمية مصممة لمساعدة طلاب الثانوية العامة والأزهرية في مادة الأحياء وعملية التعلم المتكاملة للصف الأول الثانوي.</p></div>
          <div className="order-1 text-right lg:order-2"><p className="text-xl font-bold text-[#d5e52d]">د. أحمد الجوهري</p><h1 className="mt-3 max-w-2xl text-4xl font-black leading-[1.25] sm:text-6xl">رحلتك تبدأ مع الجوهري<br />خد أول خطوة.. وأنت واثق</h1><p className="mt-5 max-w-xl text-lg font-medium leading-8 text-[#f7f5eb]">تجربة تعليمية متكاملة تستحق تبدأ بيها لأن كل تفصيلة مصممة علشانك</p><Button size="lg" className="mt-7 bg-[#f4a637] text-[#050705] hover:bg-[#d5e52d]">سجل وخد أول خطوة</Button></div>
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="mb-8 flex flex-wrap items-end justify-between gap-6"><div><h2 className="text-right text-4xl font-black">الكورسات <span className="text-[#d5e52d]">المقترحة</span></h2><p className="mt-3 text-sm text-[#aab29e]">تقدر تختار من أفضل الكورسات المقترحة من عيلة الجوهري</p></div><Button className="bg-[#5e8b4a] text-[#f7f5eb] hover:bg-[#d5e52d] hover:text-[#050705]">شوف كل الكورسات</Button></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{courses.map((course) => <article key={course.title} className="overflow-hidden rounded-2xl border border-[#263d25] bg-[#111a0e] shadow-xl transition-transform hover:-translate-y-1"><div className="aspect-[1.35] bg-[#263d25] bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }} /><div className="p-5 text-right"><p className="text-xs text-[#aab29e]">{course.level}</p><h3 className="mt-2 min-h-14 text-lg font-bold">{course.title}</h3><p className="mt-4 text-sm font-bold text-[#f4a637]">يبدأ من {course.price}</p><Button className="mt-5 w-full bg-[#5e8b4a] text-[#f7f5eb] hover:bg-[#d5e52d] hover:text-[#050705]">الدخول للكورس</Button><Button className="mt-2 w-full bg-[#f4a637] text-[#050705] hover:bg-[#d5e52d]">الاشتراك في الكورس!</Button></div></article>)}</div></section>

      <section id="why" className="bg-[#1b301a] py-16"><div className="mx-auto max-w-7xl px-5 lg:px-8"><h2 className="text-right text-4xl font-black">ليه عيلة الجوهري؟</h2><div className="mt-8 grid gap-5 md:grid-cols-3"><Reason number="1" title="فيديوهات شرح تفصيلي" text="لكل درس بأسلوب سهل وممتع" /><Reason number="2" title="تجارب حقيقية" text="تكتشف وتطبق خطوة بخطوة" /><Reason number="3" title="امتحانات تفاعلية" text="بعد كل درس علشان تقيس مستواك" /></div></div></section>

      <section id="students" className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="mb-7 flex items-center justify-between gap-4"><h2 className="text-4xl font-black">لوحة الشرف</h2><Button variant="outline" className="border-[#5e8b4a] text-[#d5e52d]">عرض اللوحة كاملة <ChevronLeft data-icon="inline-end" /></Button></div><div className="rounded-3xl border border-[#263d25] bg-[#111a0e] p-5"><div className="grid gap-3 sm:grid-cols-3">{['طالب مكرم: 36 طالب','أعلى مجموع: 649 طالب','أربع دفعات: 2022 • 2024 • 2025 • 2026'].map((item) => <div key={item} className="rounded-xl bg-[#d5e52d] px-4 py-4 text-center font-bold text-[#050705]">{item}</div>)}</div><div className="mt-6 overflow-hidden rounded-2xl bg-[#e7e8cf] p-6 text-center text-[#284725]"><p className="text-2xl font-black">أوائل الجوهري</p><p className="mt-2 text-sm">طلابنا المتفوقون في كل دفعة</p><div className="mt-6 grid gap-3 sm:grid-cols-4">{[1,2,3,4,5,6,7,8].map((item) => <div key={item} className="rounded-xl border-2 border-[#5e8b4a] bg-[#f7f5eb] p-5 text-2xl font-black">{item}</div>)}</div></div></div></section>

      <button aria-label="تواصل معنا" className="fixed bottom-6 left-6 z-30 flex size-14 items-center justify-center rounded-full bg-[#8dbb66] text-[#050705] shadow-xl"><MessageCircle /></button>
      <footer className="border-t border-[#263d25] bg-[#050705] py-10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 text-sm text-[#aab29e] lg:px-8"><p>جميع الحقوق محفوظة © 2026</p><div className="flex items-center gap-5"><a href="#courses" className="hover:text-[#d5e52d]">الكورسات</a><a href="#why" className="hover:text-[#d5e52d]">المساعدة</a><span className="font-bold text-[#d5e52d]">أحمد الجوهري</span></div></div></footer>
    </main>
  )
}

function Reason({ number, title, text }: { number: string; title: string; text: string }) { return <div className="min-h-48 rounded-2xl bg-[#5e8b4a] p-6 text-right text-[#f7f5eb]"><span className="text-4xl font-black text-[#d5e52d]">{number}</span><h3 className="mt-8 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-7 text-[#e7e8cf]">{text}</p></div> }

