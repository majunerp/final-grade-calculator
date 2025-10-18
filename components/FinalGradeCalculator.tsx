'use client';

import { useState, useEffect } from 'react';
import {
  calculateNeededGrade,
  calculateFinalGrade,
  getGradeSuggestion,
  isValidPercentage,
  percentageToLetter,
} from '@/lib/gradeCalculations';
import { Calculator, TrendingUp, Award, AlertCircle } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const suggestionToneStyles: Record<
  string,
  { icon: string; border: string; background: string }
> = {
  'text-success': {
    icon: 'text-success',
    border: 'border-success',
    background: 'bg-success/10 dark:bg-success/20',
  },
  'text-warning': {
    icon: 'text-warning',
    border: 'border-warning',
    background: 'bg-warning/10 dark:bg-warning/20',
  },
  'text-error': {
    icon: 'text-error',
    border: 'border-error',
    background: 'bg-error/10 dark:bg-error/20',
  },
};

type ChartTooltipPayload = {
  value: number;
  payload: {
    finalExam: number;
    finalGrade: number;
  };
};

interface ChartTooltipProps {
  active?: boolean;
  payload?: ChartTooltipPayload[];
  label?: number;
}

const ChartTooltip = ({ active, payload, label }: ChartTooltipProps) => {
  if (!active || !payload || payload.length === 0 || label === undefined) {
    return null;
  }

  const gradeValue = payload[0].value;

  return (
    <div className="rounded-lg border border-primary/40 bg-white px-4 py-3 text-sm text-gray-900 shadow-lg dark:border-primary/60 dark:bg-gray-900 dark:text-gray-100">
      <p className="font-semibold">Final Exam: {label}%</p>
      <p className="text-gray-600 dark:text-gray-300">
        Final Grade: {gradeValue.toFixed(2)}% ({percentageToLetter(gradeValue)})
      </p>
    </div>
  );
};

export default function FinalGradeCalculatorComponent() {
  const [currentGrade, setCurrentGrade] = useState<string>('85');
  const [desiredGrade, setDesiredGrade] = useState<string>('90');
  const [finalWeight, setFinalWeight] = useState<string>('30');
  const [mode, setMode] = useState<'needed' | 'predict'>('needed');
  const [finalExamGrade, setFinalExamGrade] = useState<string>('');

  const [result, setResult] = useState<number | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const current = parseFloat(currentGrade);
    const desired = parseFloat(desiredGrade);
    const weight = parseFloat(finalWeight);
    const finalGrade = parseFloat(finalExamGrade);

    if (mode === 'needed') {
      if (
        isValidPercentage(current) &&
        isValidPercentage(desired) &&
        weight >= 0 &&
        weight <= 100
      ) {
        const needed = calculateNeededGrade(current, desired, weight);
        setResult(needed);

        // Generate chart data
        const data = [];
        for (let i = 0; i <= 100; i += 5) {
          const finalGrade = calculateFinalGrade(current, i, weight);
          data.push({
            finalExam: i,
            finalGrade: finalGrade,
          });
        }
        setChartData(data);
      }
    } else {
      if (
        isValidPercentage(current) &&
        isValidPercentage(finalGrade) &&
        weight >= 0 &&
        weight <= 100
      ) {
        const final = calculateFinalGrade(current, finalGrade, weight);
        setResult(final);
      }
    }
  }, [currentGrade, desiredGrade, finalWeight, finalExamGrade, mode]);

  const suggestion =
    mode === 'needed' && result !== null ? getGradeSuggestion(result) : null;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        {/* Mode Toggle */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setMode('needed')}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
              mode === 'needed'
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Calculator className="w-5 h-5" />
              <span>What Do I Need?</span>
            </div>
          </button>
          <button
            onClick={() => setMode('predict')}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
              mode === 'predict'
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Predict My Grade</span>
            </div>
          </button>
        </div>

        {/* Input Form */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Current Grade (%)
            </label>
            <input
              type="number"
              value={currentGrade}
              onChange={(e) => setCurrentGrade(e.target.value)}
              min="0"
              max="100"
              step="0.01"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              placeholder="85"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Letter grade: {percentageToLetter(parseFloat(currentGrade) || 0)}
            </p>
          </div>

          {mode === 'needed' ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Desired Final Grade (%)
              </label>
              <input
                type="number"
                value={desiredGrade}
                onChange={(e) => setDesiredGrade(e.target.value)}
                min="0"
                max="100"
                step="0.01"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                placeholder="90"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Target: {percentageToLetter(parseFloat(desiredGrade) || 0)}
              </p>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Final Exam Grade (%)
              </label>
              <input
                type="number"
                value={finalExamGrade}
                onChange={(e) => setFinalExamGrade(e.target.value)}
                min="0"
                max="100"
                step="0.01"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                placeholder="88"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Score: {percentageToLetter(parseFloat(finalExamGrade) || 0)}
              </p>
            </div>
          )}

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Final Exam Weight (%)
            </label>
            <input
              type="number"
              value={finalWeight}
              onChange={(e) => setFinalWeight(e.target.value)}
              min="0"
              max="100"
              step="1"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              placeholder="30"
            />
            <input
              type="range"
              value={finalWeight}
              onChange={(e) => setFinalWeight(e.target.value)}
              min="0"
              max="100"
              step="1"
              className="w-full mt-2"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Current work: {100 - parseFloat(finalWeight)}%
            </p>
          </div>
        </div>

        {/* Result Display */}
        {result !== null && (
          <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 dark:from-primary/20 dark:to-primary-light/20 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-primary dark:text-primary-light" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {mode === 'needed' ? 'Grade Needed on Final Exam' : 'Your Final Grade'}
              </h3>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-primary dark:text-primary-light mb-2">
                {result.toFixed(2)}%
              </div>
              <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                {percentageToLetter(result)}
              </div>
            </div>

            {suggestion && mode === 'needed' && (
              <div
                className={`mt-4 flex items-start gap-3 p-4 rounded-lg border-l-4 ${
                  suggestionToneStyles[suggestion.color]?.background ?? 'bg-white dark:bg-gray-900'
                } ${suggestionToneStyles[suggestion.color]?.border ?? 'border-primary'}`}
              >
                <AlertCircle
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    suggestionToneStyles[suggestion.color]?.icon ?? 'text-primary'
                  }`}
                />
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                  {suggestion.message}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Chart */}
        {mode === 'needed' && chartData.length > 0 && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Final Grade Projection
            </h4>
            <div className="bg-gray-50 dark:bg-gray-900/40 rounded-lg p-4">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="finalExam"
                    label={{ value: 'Final Exam Score (%)', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis
                    label={{ value: 'Final Grade (%)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip content={<ChartTooltip />} wrapperStyle={{ outline: 'none' }} />
                  <ReferenceLine
                    y={parseFloat(desiredGrade)}
                    stroke="#10B981"
                    strokeDasharray="3 3"
                    label="Target"
                  />
                  {result !== null && result >= 0 && result <= 100 && (
                    <ReferenceLine
                      x={result}
                      stroke="#F59E0B"
                      strokeDasharray="3 3"
                      label="Needed"
                    />
                  )}
                  <Line
                    type="monotone"
                    dataKey="finalGrade"
                    stroke="#0EA5E9"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
