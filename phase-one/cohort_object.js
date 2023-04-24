const cohort = {
  name: 'March22',
  id: 5100,
  students: [
    'Pablo',
    'Sunny',
    'Maddy',
    'Ana',
    'Q'
  ]
}

const print_cohort_info = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`)
}

print_cohort_info(cohort)