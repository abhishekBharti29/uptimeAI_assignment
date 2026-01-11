export const YEARS_OF_CONTRIBUTION = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013];
export const HEATMAP_MOCK_DATA = [
  {
    z: [
      [
        null, 4, 18, 36, null, 57, 9, null,
        74, 21, null, 88, 32, null, 61, 45,
        null, 7, 93, null, 26, 50, null, 68,
        11, null, 82, 39, null, 95, 14, null,
        29, 66, null, 5, 90, null, 41, 98,
        null, 23, 54, null, 76, 1, null, 60
      ],
      [12, null, 45, 78, 0, 34, null, 67,
        89, 23, null, 98, 56, 41, null, 71,
        84, 9, null, 63, 1, 27, null, 80,
        36, 14, null, 92, 76, 5, null, 18,
        66, 23, null, 7, 88, 54, null, 31,
        10, null, 29, 47, 60, null, 95, 2
      ],
      [
        null, 8, 19, 42, null, 67, 91, 3,
        null, 55, 28, 74, null, 90, 6, 39,
        null, 12, 83, 21, null, 48, 66, 9,
        null, 97, 35, 14, null, 59, 72, 4,
        null, 88, 26, 61, null, 17, 93, 50,
        null, 30, 11, 79, null, 64, 2, 85
      ],
      [
        0, 15, null, 33, 57, null, 82, 6,
        null, 91, 24, null, 68, 44, null, 10,
        76, null, 29, 53, null, 97, 18, null,
        62, 8, null, 40, 85, null, 21, 70,
        null, 5, 94, null, 36, 60, null, 13,
        78, null, 26, 49, null, 89, 2, null
      ],
      [
        null, 22, 46, null, 73, 5, null, 91,
        14, null, 38, 60, null, 87, 9, null,
        54, 28, null, 79, 1, null, 65, 33,
        null, 96, 18, null, 42, 70, null, 11,
        58, null, 24, 83, null, 7, 90, null,
        31, 52, null, 16, 68, null, 98, 4
      ],
      [
        6, null, 27, 49, null, 72, 13, null,
        88, 34, null, 95, 2, null, 61, 40,
        null, 18, 79, null, 53, 9, null, 66,
        21, null, 84, 30, null, 57, 11, null,
        92, 45, null, 7, 69, null, 24, 98,
        null, 36, 15, null, 81, 4, null, 60
      ],
      [
        0, null, 12, 47, null, 69, 8, null,
        85, 34, null, 92, 19, null, 58, 41,
        null, 6, 73, null, 27, 64, null, 81,
        15, null, 98, 30, null, 52, 10, null,
        90, 44, null, 3, 67, null, 24, 79,
        null, 35, 56, null, 88, 2, null, 61
      ]

    ],
    x: [
      'Dec Week 1', 'Dec Week 2', 'Dec Week 3', 'Dec Week 4',
      'Jan Week 1', 'Jan Week 2', 'Jan Week 3', 'Jan Week 4',
      'Nov Week 1', 'Nov Week 2', 'Nov Week 3', 'Nov Week 4',
      'Feb Week 1', 'Feb Week 2', 'Feb Week 3', 'Feb Week 4',
      'Mar Week 1', 'Mar Week 2', 'Mar Week 3', 'Mar Week 4',
      'Apr Week 1', 'Apr Week 2', 'Apr Week 3', 'Apr Week 4',
      'May Week 1', 'May Week 2', 'May Week 3', 'May Week 4',
      'Jun Week 1', 'Jun Week 2', 'Jun Week 3', 'Jun Week 4',
      'Jul Week 1', 'Jul Week 2', 'Jul Week 3', 'Jul Week 4',
      'Aug Week 1', 'Aug Week 2', 'Aug Week 3', 'Aug Week 4',
      'Sep Week 1', 'Sep Week 2', 'Sep Week 3', 'Sep Week 4',
      'Oct Week 1', 'Oct Week 2', 'Oct Week 3', 'Oct Week 4'
    ],
    y: ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
    type: 'heatmap',
    hoverongaps: true
  }
];

export const RADAR_CHART_MOCK_DATA = {
  data: [
    {
      type: 'scatterpolar',
      r: [0, 0, 50, 10, 0, 0],
      theta: ['Issues', 'Code review', '82% commits', '18% pull requests', 'Issues'],
      fill: 'toself'
    }
  ],
  layout: {
    polar: {
      radialaxis: {
        visible: false,
        range: [0, 50]
      }
    },
    showlegend: false
  }
}