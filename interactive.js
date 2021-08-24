export default class Completed {
  static ToDoComplete(data) {
    this.checks = document.querySelectorAll('.checkbox');
    for (let i = 0; i < this.checks.length; i += 1) {
      // eslint-disable-next-line no-loop-func
      this.checks[i].addEventListener('change', () => {
        if (this.checks[i].checked) {
          this.labels = document.getElementById(`li-${[i]}`);
          this.labels.classList.add('label-true');
          data[i].completed = true;
          document.getElementById(`open-${[i]}`).style.display = 'none';
          document.getElementById(`close-${[i]}`).style.display = 'flex';
          document.getElementById(`input-${[i]}`).style.background = 'aliceblue';
        } else {
          this.labels = document.getElementById(`li-${[i]}`);
          this.labels.classList.remove('label-true');
          data[i].completed = false;
          document.getElementById(`open-${[i]}`).style.display = 'flex';
          document.getElementById(`close-${[i]}`).style.display = 'none';
          document.getElementById(`input-${[i]}`).style.background = 'none';
        }
        localStorage.setItem('Task', JSON.stringify(data));
      });
    }
  }
}
