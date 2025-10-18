import { Metadata } from 'next';
import FinalGradeCalculator from '@/components/FinalGradeCalculator';
import { generateMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  Calculator,
  TrendingUp,
  Award,
  Zap,
  BookOpen,
  Users,
  CalendarCheck,
  Target,
  ClipboardCheck,
  Share2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Final Grade Calculator | Exam Score Planner',
  description:
    'Use this final grade calculator to project exam scores, model weighted scenarios, and stay on track with personalized study insights for every course.',
  keywords: [
    'final exam calculator',
    'finals grade calculator',
    'calculate my final grade',
    'grade needed calculator',
    'student grade calculator',
  ],
  canonical: '/',
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Final Grade Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Instantly calculate what grade you need on your final exam to achieve your target grade.
            Plan your study goals and understand exactly what score you need to reach your desired
            outcome in any course.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Bookmark this tool on all your devices for quick access whenever you need it.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <FinalGradeCalculator />
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Use Our Final Grade Calculator?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 mb-4">
                <Zap className="w-8 h-8 text-primary dark:text-primary-light" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Instant Results
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get immediate calculations as you type. Receive real-time feedback so you can
                quickly understand what you need to achieve on your final exam. Your projections
                are always accessible whenever you return.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 mb-4">
                <Calculator className="w-8 h-8 text-primary dark:text-primary-light" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Flexible Input Options
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Calculate your grade using percentages, letter grades, or GPA scores. Works with
                any grading system used by colleges and universities, making it a versatile study
                companion.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 mb-4">
                <TrendingUp className="w-8 h-8 text-primary dark:text-primary-light" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Visual Projections
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                See how different final exam scores will affect your overall grade with our
                interactive chart. Plan your study strategy based on visual projections and track
                your improvements over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            How to Use the Final Grade Calculator
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Enter Your Current Grade
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Input your current grade percentage before the final exam. If you have a letter
                  grade, the tool automatically converts it to a percentage for accurate calculations.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Set the Final Exam Weight
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Specify what percentage of your overall grade the final exam is worth. Most
                  courses have final exams weighted between 20-40% of the total grade, though this
                  varies by institution and course.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Choose Your Target Grade
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enter the final grade you want to achieve in the course. The calculator will
                  instantly show you exactly what score you need on the final exam to reach your
                  target, with real-time updates as you adjust values.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Review Your Results
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  See the grade you need on your final exam, along with helpful suggestions about
                  whether your goal is easily achievable, challenging, or requires maximum effort.
                  Use the visualization chart to explore different scenarios and share insights with
                  mentors or study partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Tools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            More Grade Calculation Tools
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Explore our suite of grade calculation tools to help you plan and track your academic
            progress throughout the semester.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/weighted-grade-calculator"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light transition-colors"
            >
              <div className="flex items-start gap-4">
                <Calculator className="w-8 h-8 text-primary dark:text-primary-light flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Weighted Grade Calculator
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Calculate your grade when you have multiple assignments, quizzes, and exams
                    with different weights. Perfect for getting a complete semester overview.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/grade-converter"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light transition-colors"
            >
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-primary dark:text-primary-light flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Grade Converter
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Convert between percentages, letter grades (A-F), and GPA scores (0-4.0).
                    Supports multiple grading scales used by different schools and universities.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Study Tips Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Smart Study Planning Tips
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Make the most of your grade calculations with these proven strategies for academic
              success.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: CalendarCheck,
                title: 'Weekly Updates',
                description:
                  'Update your grades every week to track progress and identify areas that need attention before it\'s too late.',
              },
              {
                icon: Target,
                title: 'Focus on High-Impact Work',
                description:
                  'Prioritize assignments and exams with higher weights to maximize your study time efficiency.',
              },
              {
                icon: Share2,
                title: 'Collaborate & Share',
                description:
                  'Share your grade goals with study partners or tutors to create accountability and get targeted help.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 flex flex-col gap-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/25 text-primary dark:text-primary-light">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
                <ClipboardCheck className="w-5 h-5 text-primary" />
                Plan Multiple Scenarios
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use the scenario slider to model best-case, realistic, and stretch goals. This helps
                you understand when a goal becomes unreachable and gives you time to adjust your
                strategy or seek extra credit opportunities.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 dark:from-primary/20 dark:to-primary-light/20 rounded-xl p-4">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary" />
                    Use impossible projections as conversation starters with instructors
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary" />
                    Track realistic outcomes to distribute study time effectively
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
                <Sparkles className="w-5 h-5 text-primary" />
                Stay Organized
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keep all your grade information in one place and review it regularly. Set reminders
                to update your calculations after each graded assignment.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 dark:from-primary/20 dark:to-primary-light/20 rounded-xl p-4">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary" />
                    Set weekly reminders to check your progress
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary" />
                    Celebrate small wins to maintain motivation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: 'How often should I update my grades?',
                answer:
                  'Update after every graded assignment to keep projections accurate. Frequent updates reveal trends and help you identify areas that need attention early.',
              },
              {
                question: 'Can this handle weighted grading systems?',
                answer:
                  'Yes. Add categories with their respective weights and the calculator computes totals instantly, giving you a detailed breakdown you can revisit anytime.',
              },
              {
                question: 'How does this help with scholarship goals?',
                answer:
                  'Track GPA requirements for each class and identify high-impact assignments. This helps you protect funding and document your progress effectively.',
              },
              {
                question: 'Will this work for curved classes?',
                answer:
                  'Add estimated curve adjustments to model different scenarios. You can compare no-curve versus curved outcomes side by side.',
              },
              {
                question: 'Can parents or tutors use this tool?',
                answer:
                  'Absolutely. Share your calculations so everyone works from the same data. This makes collaboration and support much more effective.',
              },
              {
                question: 'Is my data stored or saved?',
                answer:
                  'All data stays in your browser session for privacy. You can export results when needed, then start fresh next term.',
              },
              {
                question: 'How do I track multiple classes?',
                answer:
                  'Use separate browser tabs for each course, or export results to a spreadsheet. This lets you maintain a master view of all your classes.',
              },
              {
                question: 'What if I need more than 100% on my final?',
                answer:
                  'If the calculator shows you need above 100%, your target may be unrealistic. Use this as a conversation starter with your professor about extra credit or adjusting your goal.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/25 flex items-center justify-center font-semibold text-primary dark:text-primary-light">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.question}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Understanding Grade Calculations
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                How It Works
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This tool calculates the score you need on remaining assessments to reach your
                target course grade. Simply enter your current average, exam weight, and desired
                outcome—the math is handled instantly.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 text-sm text-gray-700 dark:text-gray-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Remove guesswork before high-stakes exams</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Understand if your target grade is realistic</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Have data-driven conversations with instructors</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>Plan multiple what-if scenarios</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                The Formula
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Final Grade = (Current Grade × (100 − Final Weight) + Final Exam Score × Final
                Weight) ÷ 100
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 dark:from-primary/20 dark:to-primary-light/20 rounded-2xl p-6 text-sm text-gray-700 dark:text-gray-200">
                <strong className="block text-gray-900 dark:text-white mb-2">Example</strong>
                <p>
                  With an 85% current grade, a final exam worth 30%, and a target of 90%, you would
                  need to score 96% on your final. If that seems too high, consider adjusting your
                  target or exploring extra credit opportunities.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Benefits
              </h3>
              <div className="grid gap-4 sm:grid-cols-3 text-sm text-gray-700 dark:text-gray-200">
                <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 p-4">
                  <strong className="block text-gray-900 dark:text-white mb-2">Goal Setting</strong>
                  Map exact scores needed to meet scholarship or honor roll requirements.
                </div>
                <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 p-4">
                  <strong className="block text-gray-900 dark:text-white mb-2">Stress Relief</strong>
                  Replace uncertainty with precise, actionable numbers.
                </div>
                <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 p-4">
                  <strong className="block text-gray-900 dark:text-white mb-2">Time Management</strong>
                  Prioritize study time based on what matters most.
                </div>
              </div>
            </div>
          </div>

      <div className="mt-12 text-center">
        <Link
          href="/how-to-calculate-final-grade"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          <BookOpen className="w-5 h-5" />
          Learn More About Grade Calculations
        </Link>
      </div>
    </div>
  </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Stay on Track All Semester
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Bookmark this page and check back after each assignment to stay informed about your
            progress. Regular updates help you maintain momentum and avoid surprises at the end of
            the term.
          </p>
        </div>
      </section>
    </div>
  );
}
