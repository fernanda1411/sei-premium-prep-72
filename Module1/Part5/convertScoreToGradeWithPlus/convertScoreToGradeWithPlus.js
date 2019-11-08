/*
Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a 
string representing the letter grade corresponding to the given score.

Notes:

(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'

If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
There are is no F+ and there is no F-.
*/

function convertScoreToGradeWithPlusAndMinus(score) {
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  }

  if (score >= 90) {
    if (score >= 90 && score <= 92) {
      return "A-";
    }
    if (score >= 98 && score <= 100) {
      return "A+";
    }
    return "A";
  }

  if (score >= 80) {
    if (score >= 80 && score <= 82) {
      return "B-";
    }
    if (score >= 88 && score <= 89) {
      return "B+";
    }
    return "B";
  }

  if (score >= 70) {
    if (score >= 70 && score <= 72) {
      return "C-";
    }
    if (score >= 78 && score <= 79) {
      return "C+";
    }
    return "C";
  }

  if (score >= 60) {
    if (score >= 60 && score <= 62) {
      return "D-";
    }
    if (score >= 68 && score <= 69) {
      return "D+";
    }
    return "D";
  }

  if (score >= 0) {
    return "F";
  }
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'