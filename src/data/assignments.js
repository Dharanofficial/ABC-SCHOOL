export const GRADES = [1, 2, 3, 4, 5];
export const MONTHS = ["June","July","August","September","October","November","December","January","February","March"];
export const SUBJECTS = [
  { key: "English", icon: "bi-book", color: "#4da3ff" },
  { key: "Maths", icon: "bi-calculator", color: "#8b5cf6" },
  { key: "Science", icon: "bi-flask", color: "#34d399" },
  { key: "Social", icon: "bi-globe", color: "#facc15" },
];
const topics = {
  English: ["Reading practice", "Vocabulary", "Sentence writing", "Story summary"],
  Maths: ["Addition", "Number practice", "Subtraction", "Multiplication tables"],
  Science: ["Plants", "Animals", "Water cycle", "Our body"],
  Social: ["My community", "Maps", "Festivals", "Helpers around us"],
};
export const assignments = GRADES.flatMap((grade) =>
  MONTHS.map((month, m) => ({
    grade, month,
    subjects: SUBJECTS.map((s, i) => ({ ...s, items: [topics[s.key][(m + grade) % 4], topics[s.key][(m + grade + i + 1) % 4]] })),
  }))
);
