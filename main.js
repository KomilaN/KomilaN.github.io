function load() {
  const column_1 = [
    2, 7, 9, 1, 10, 6, 8, 5, 1, 7, 4, 8, 9, 6, 7, 1, 2, 7, 10, 2, 4, 6, 4, 5, 3,
    6, 9, 8, 5, 10,
  ];
  const column_2 = [
    9, 8, 10, 6, 1, 5, 4, 7, 4, 10, 7, 9, 2, 2, 6, 7, 1, 2, 7, 6, 1, 9, 9, 7,
    10, 5, 7, 6, 1, 3,
  ];

  const column_3 = [
    74, 93, 51, 91, 63, 97, 86, 76, 54, 63, 92, 62, 41, 77, 53, 74, 94, 69, 99,
    70, 90, 92, 87, 72, 48, 95, 61, 76, 45, 61,
  ];

  const column_4 = [
    78, 76, 69, 99, 80, 88, 83, 46, 70, 63, 65, 57, 72, 87, 75, 77, 60, 67, 56,
    91, 98, 91, 64, 58, 63, 44, 62, 87, 70, 67,
  ];

  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  let sums = [];
  let total_score = 0;

  for (let i = 0; i < 30; i++) {
    sum1 += column_1[i];
    sum2 += column_2[i];
    sum3 += column_3[i];
    sum4 += column_4[i];
  }
  sums.push(sum1, sum2, sum3, sum4);

  for (let i = 0; i < 4; i++) {
    total_score += sums[i];
  }

  const results = {
    col1: column_1,
    col2: column_2,
    col3: column_3,
    col4: column_4,
    sums: sums,
    total_score: total_score,
  };

  console.log(results);
}
load();
