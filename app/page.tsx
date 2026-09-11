'use client'

import { useState } from 'react'
import { ArrowLeft, BookOpen, Check, ChevronLeft, Clock3, GraduationCap, HeartHandshake, Lightbulb, PlayCircle, Sparkles, Target, Users, Video } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const instructor = 'الأستاذ محمد الشريف'

const courses = [
  { title: 'التفاضل والتكامل', level: 'الصف الثالث الثانوي', lessons: 'عدد الدروس قابل للتحديث', description: 'نبني الفكرة من الأساس حتى نحل أصعب أسئلة الاختبارات.', accent: 'from-primary to-indigo-400' },
  { title: 'الجبر والهندسة', level: 'الصف الثاني الثانوي', lessons: 'عدد الدروس قابل للتحديث', description: 'شرح بصري يساعدك على رؤية العلاقات وفهم خطوات الحل.', accent: 'from-cyan-500 to-primary' },
  { title: 'أساسيات الرياضيات', level: 'الصف الأول الثانوي', lessons: 'عدد الدروس قابل للتحديث', description: 'أساس قوي ومنهج مرتب يرافقك في بداية رحلتك الدراسية.', accent: 'from-indigo-400 to-violet-400' },
]

const features = [
  { title: 'شرح مبسط', text: 'نحوّل الأفكار المعقدة إلى خطوات واضحة وسهلة.', icon: Lightbulb },
  { title: 'تدريب مستمر', text: 'تطبيقات متنوعة تثبّت المعلومة وتبني ثقتك.', icon: Target },
  { title: 'متابعة التقدم', text: 'مسار منظم يساعدك تعرف خطوتك التالية دائمًا.', icon: BookOpen },
  { title: 'دعم فوري', text: 'اسأل وناقش وتعلم مع مجتمع دراسي مشجع.', icon: HeartHandshake },
]

export default function Page() {
  const [role, setRole] = useState<'student' | 'instructor'>('student')

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="text-xl font-bold tracking-tight">لِـ<span className="text-primary">Learnova</span></span>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex" aria-label="التنقل الرئيسي">
            <a className="text-foreground" href="#home">الرئيسية</a><a href="#why" className="hover:text-primary">لماذا Learnova؟</a><a href="#courses" className="hover:text-primary">الدورات</a><a href="#about" className="hover:text-primary">عن الأستاذ</a>
          </nav>
          <div className="flex items-center gap-2"><Button variant="ghost" className="hidden sm:inline-flex">تسجيل الدخول</Button><Button>ابدأ التعلم</Button></div>
        </div>
      </header>

      <section id="home" className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -left-24 top-8 -z-0 size-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative z-10 flex flex-col items-start gap-7">
          <Badge variant="secondary" className="gap-2 px-3 py-1.5 text-primary"><Sparkles aria-hidden="true" /> تعلم بذكاء، وتفوق بثقة</Badge>
          <h1 className="max-w-2xl text-balance text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">الرياضيات أسهل مما <span className="text-primary">تتخيل</span></h1>
          <p className="max-w-xl text-pretty text-lg leading-8 text-muted-foreground">شرح واضح وتدريب ذكي يخليك تفهم الرياضيات، تتقدم بثقة، وتستمتع بكل خطوة في رحلتك.</p>
          <div className="flex flex-wrap items-center gap-3"><Button size="lg" className="gap-2" onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>استكشف الدورات <ArrowLeft data-icon="inline-end" /></Button><Button size="lg" variant="outline" className="gap-2"><PlayCircle data-icon="inline-start" /> شاهد كيف نتعلم</Button></div>
        </div>
        <MathIllustration />
      </section>

      <section id="why" className="bg-secondary/50"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="mx-auto mb-10 max-w-2xl text-center"><Badge variant="outline" className="mb-3 text-primary">تجربة تعلم مختلفة</Badge><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">ليه <span className="text-primary">Learnova؟</span></h2><p className="mt-3 text-muted-foreground">كل ما تحتاجه عشان تتعلم بطريقة تناسبك وتوصل لهدفك.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(({ title, text, icon: Icon }) => <Card key={title} className="group border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"><CardHeader><div className="mb-2 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon /></div><CardTitle className="text-lg">{title}</CardTitle><CardDescription className="leading-7">{text}</CardDescription></CardHeader></Card>)}</div></div></section>

      <section id="courses" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><Badge variant="outline" className="mb-3 text-primary">اختياراتنا لك</Badge><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">دورات <span className="text-primary">مميزة</span></h2><p className="mt-3 text-muted-foreground">محتوى مصمم بعناية ليناسب مرحلتك ويقودك خطوة بخطوة.</p></div><Button variant="ghost" className="gap-2 text-primary">عرض كل الدورات <ArrowLeft data-icon="inline-end" /></Button></div><div className="grid gap-5 md:grid-cols-3">{courses.map((course) => <Card key={course.title} className="group overflow-hidden border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"><div className={`flex h-32 items-end bg-gradient-to-br ${course.accent} p-5 text-primary-foreground`}><div className="flex size-12 items-center justify-center rounded-2xl bg-background/20 backdrop-blur-sm"><BookOpen /></div></div><CardHeader className="gap-2"><Badge variant="secondary" className="w-fit">{course.level}</Badge><CardTitle className="text-xl">{course.title}</CardTitle><CardDescription className="leading-6">{course.description}</CardDescription></CardHeader><CardContent><div className="flex items-center justify-between gap-3 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Video /> {course.lessons}</span><Button variant="ghost" size="sm" className="px-0 text-primary">اكتشف الدورة <ChevronLeft data-icon="inline-end" /></Button></div></CardContent></Card>)}</div></section>

      <section id="about" className="bg-secondary/50"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:px-8"><div className="relative mx-auto w-full max-w-sm"><div className="aspect-square rounded-[2rem] bg-primary p-3"><div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] bg-card text-center"><Avatar className="mb-5 size-28 border-8 border-secondary"><AvatarFallback className="bg-primary text-3xl font-bold text-primary-foreground">م</AvatarFallback></Avatar><p className="font-mono text-xs uppercase tracking-widest text-primary">Math Mentor</p><h3 className="mt-2 text-2xl font-bold">{instructor}</h3><p className="mt-2 text-sm text-muted-foreground">خبير الرياضيات للمرحلة الثانوية</p></div></div></div><div><Badge variant="outline" className="mb-4 text-primary">معك في الرحلة</Badge><h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">نتعلم سوا، ونحوّل كل سؤال إلى <span className="text-primary">خطوة للأمام</span></h2><p className="mt-5 max-w-xl leading-8 text-muted-foreground">أؤمن أن كل طالب قادر على فهم الرياضيات عندما يحصل على الشرح المناسب والطريقة الصحيحة للتدريب. لهذا صممت Learnova لتكون رفيقك الدراسي اليومي.</p><div className="mt-7 grid gap-4 sm:grid-cols-2">{['شرح مبسط وواضح','تدريبات تحاكي الاختبارات','متابعة تقدمك باستمرار','مجتمع طلابي داعم'].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-medium"><span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary"><Check /></span>{item}</div>)}</div></div></div></section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12"><Badge className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground">خطوتك الأولى</Badge><h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">جاهز تخلي الرياضيات أسهل؟</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-primary-foreground/75">ابدأ رحلتك مع Learnova، واختر الدورة التي تناسب هدفك الدراسي.</p><Button size="lg" variant="secondary" className="mt-8 gap-2">ابدأ التعلم الآن <ArrowLeft data-icon="inline-end" /></Button></div></section>

      <section className="border-t border-border bg-card"><div className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div className="mb-5 flex flex-wrap items-center justify-between gap-4"><div><p className="text-sm font-semibold">استكشف Learnova كـ</p><p className="mt-1 text-xs text-muted-foreground">شوف التجربة المناسبة لدورك</p></div><div className="flex rounded-xl bg-secondary p-1"><button onClick={() => setRole('student')} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${role === 'student' ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground'}`}>طالب</button><button onClick={() => setRole('instructor')} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${role === 'instructor' ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground'}`}>مدرس</button></div></div>{role === 'student' ? <StudentPreview /> : <InstructorPreview />}</div></section>
      <footer className="bg-card"><Separator /><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-7 text-sm text-muted-foreground lg:px-8"><div className="flex items-center gap-2 font-semibold text-foreground"><LogoMark small /> Learnova</div><p>Learnova — تعلم الرياضيات بطريقة مختلفة.</p><div className="flex gap-5"><a href="#about" className="hover:text-primary">عن الأستاذ</a><a href="#pricing" className="hover:text-primary">ابدأ الآن</a></div></div></footer>
    </main>
  )
}

function LogoMark({ small = false }: { small?: boolean }) { return <div className={`flex ${small ? 'size-7' : 'size-10'} items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm`}><Sparkles aria-hidden="true" /></div> }
function MathIllustration() { return <div className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center"><div className="absolute inset-10 rounded-[3rem] bg-secondary/80 rotate-3" /><div className="relative flex size-64 items-center justify-center rounded-[3rem] bg-primary text-primary-foreground shadow-2xl shadow-primary/20"><div className="text-center"><GraduationCap className="mx-auto mb-3 size-16" /><p className="text-2xl font-bold">نتعلم</p><p className="mt-1 text-primary-foreground/75">بخطوات بسيطة</p></div></div><span className="absolute right-8 top-12 flex size-16 rotate-12 items-center justify-center rounded-2xl bg-card text-2xl font-bold text-primary shadow-lg">π</span><span className="absolute bottom-10 left-8 flex size-16 -rotate-12 items-center justify-center rounded-2xl bg-card text-2xl font-bold text-primary shadow-lg">x²</span><span className="absolute bottom-8 right-8 flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">∑</span></div> }
function StudentPreview() { return <div className="grid gap-4 md:grid-cols-3"><PreviewCard icon={<BookOpen />} title="مسارك الدراسي" text="الدورات التي تتابعها تظهر هنا" /><PreviewCard icon={<PlayCircle />} title="الدرس التالي" text="خطوتك القادمة في التعلم" /><PreviewCard icon={<Clock3 />} title="سجل التعلم" text="مستعد لإضافة بياناتك" /></div> }
function InstructorPreview() { return <div className="grid gap-4 md:grid-cols-3"><PreviewCard icon={<Users />} title="طلابك" text="بيانات الطلاب تظهر هنا" /><PreviewCard icon={<Target />} title="التقدم" text="مؤشرات الأداء قابلة للربط" /><PreviewCard icon={<Video />} title="محتواك" text="إدارة الدروس والدورات" /></div> }
function PreviewCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <Card><CardContent className="flex items-center gap-4 p-5"><div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</div><div><p className="text-sm text-muted-foreground">{title}</p><p className="font-bold">{text}</p></div><ChevronLeft className="ms-auto text-muted-foreground" /></CardContent></Card> }
