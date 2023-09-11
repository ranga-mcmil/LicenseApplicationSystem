const nationalIdRegex = /^\d{2}-\d{7}[A-Z]\d{2}$/;
// const nationalIdRegex2 = /^\d{2}-\d{7} [A-Z] \d{2}$/;

// const nationalId = "12-3456789 A 01";

// if (nationalIdRegex2.test(nationalId)) {
//   console.log("The national ID is valid.");
// } else {
//   console.log("The national ID is invalid.");
// }
const form = document.querySelector('.id_verification');
let id_feedback = document.querySelector('.id-feedback');
form.id_number.addEventListener('keyup', e => {
  if (nationalIdRegex.test(e.target.value)) {
    console.log("The national ID is valid.");
    id_feedback.innerHTML = 'ID Number is in correct format!'
    id_feedback.classList.remove('alert');
    id_feedback.classList.remove('alert-danger');
    id_feedback.classList.add('alert');
    id_feedback.classList.add('alert-success');
    form.submit.classList.add('btn');
    form.submit.classList.add('btn-primary');
    form.submit.classList.add('mt-4');
    form.submit.classList.add('d-block');
    form.submit.classList.add('w-100');
    form.submit.classList.remove('d-none');
  } else {
    console.log("The national ID is invalid.");
    id_feedback.innerHTML = 'Use ID format 70-2006308J12';
    id_feedback.classList.add('alert');
    id_feedback.classList.add('alert-danger');
    id_feedback.classList.remove('alert-success');
    form.submit.classList.remove('btn');
    form.submit.classList.remove('btn-primary');
    form.submit.classList.remove('mt-4');
    form.submit.classList.remove('d-block');
    form.submit.classList.remove('w-100');
    form.submit.classList.add('d-none');
  }
})
