// Grade conversion utilities

export interface GradeScale {
  letter: string;
  min: number;
  max: number;
  gpa: number;
}

export const standardGradeScale: GradeScale[] = [
  { letter: 'A+', min: 97, max: 100, gpa: 4.0 },
  { letter: 'A', min: 93, max: 96.99, gpa: 4.0 },
  { letter: 'A-', min: 90, max: 92.99, gpa: 3.7 },
  { letter: 'B+', min: 87, max: 89.99, gpa: 3.3 },
  { letter: 'B', min: 83, max: 86.99, gpa: 3.0 },
  { letter: 'B-', min: 80, max: 82.99, gpa: 2.7 },
  { letter: 'C+', min: 77, max: 79.99, gpa: 2.3 },
  { letter: 'C', min: 73, max: 76.99, gpa: 2.0 },
  { letter: 'C-', min: 70, max: 72.99, gpa: 1.7 },
  { letter: 'D+', min: 67, max: 69.99, gpa: 1.3 },
  { letter: 'D', min: 63, max: 66.99, gpa: 1.0 },
  { letter: 'D-', min: 60, max: 62.99, gpa: 0.7 },
  { letter: 'F', min: 0, max: 59.99, gpa: 0.0 },
];

export function letterToPercentage(letter: string): number {
  const grade = standardGradeScale.find(
    (g) => g.letter.toUpperCase() === letter.toUpperCase()
  );
  return grade ? (grade.min + grade.max) / 2 : 0;
}

export function percentageToLetter(percentage: number): string {
  const grade = standardGradeScale.find(
    (g) => percentage >= g.min && percentage <= g.max
  );
  return grade ? grade.letter : 'F';
}

export function percentageToGPA(percentage: number): number {
  const grade = standardGradeScale.find(
    (g) => percentage >= g.min && percentage <= g.max
  );
  return grade ? grade.gpa : 0.0;
}

export function gpaToPercentage(gpa: number): number {
  const grade = standardGradeScale.find((g) => Math.abs(g.gpa - gpa) < 0.1);
  return grade ? (grade.min + grade.max) / 2 : 0;
}

// Calculate what grade is needed on final exam
export function calculateNeededGrade(
  currentGrade: number,
  desiredGrade: number,
  finalWeight: number
): number {
  // Formula: desiredGrade = (currentGrade * (100 - finalWeight) + finalGrade * finalWeight) / 100
  // Solving for finalGrade: finalGrade = (desiredGrade * 100 - currentGrade * (100 - finalWeight)) / finalWeight

  if (finalWeight === 0) return desiredGrade;

  const neededGrade =
    (desiredGrade * 100 - currentGrade * (100 - finalWeight)) / finalWeight;

  return Math.round(neededGrade * 100) / 100;
}

// Calculate final grade given current grade, final exam grade, and weight
export function calculateFinalGrade(
  currentGrade: number,
  finalGrade: number,
  finalWeight: number
): number {
  const result =
    (currentGrade * (100 - finalWeight) + finalGrade * finalWeight) / 100;
  return Math.round(result * 100) / 100;
}

// Get intelligent suggestion based on needed grade
export function getGradeSuggestion(neededGrade: number): {
  message: string;
  difficulty: 'easy' | 'moderate' | 'hard' | 'impossible' | 'already-achieved';
  color: string;
} {
  if (neededGrade < 0) {
    return {
      message: 'Great news! You can score 0% on the final and still achieve your target grade.',
      difficulty: 'already-achieved',
      color: 'text-success',
    };
  } else if (neededGrade <= 60) {
    return {
      message: 'You need a relatively low score on the final exam. This goal is very achievable!',
      difficulty: 'easy',
      color: 'text-success',
    };
  } else if (neededGrade <= 80) {
    return {
      message: 'You need a moderate score on the final exam. With good preparation, this is achievable.',
      difficulty: 'moderate',
      color: 'text-warning',
    };
  } else if (neededGrade <= 100) {
    return {
      message: 'You need a high score on the final exam. This will require significant effort and preparation.',
      difficulty: 'hard',
      color: 'text-warning',
    };
  } else {
    return {
      message: 'Unfortunately, even scoring 100% on the final exam won\'t achieve your target grade.',
      difficulty: 'impossible',
      color: 'text-error',
    };
  }
}

// Validate percentage input
export function isValidPercentage(value: number): boolean {
  return !isNaN(value) && value >= 0 && value <= 100;
}
