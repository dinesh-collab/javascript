document.getElementById('course-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const courseName = document.getElementById('course-name').value.trim();
    const courseInstructor = document.getElementById('course-instructor').value.trim();
    const courseDuration = document.getElementById('course-duration').value.trim();

    if (courseName !== '' && courseInstructor !== '' && courseDuration !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = `Course: ${courseName}, Instructor: ${courseInstructor}, Duration: ${courseDuration} hours`;
        document.getElementById('course-list').appendChild(listItem);

        document.getElementById('course-name').value = '';
        document.getElementById('course-instructor').value = '';
        document.getElementById('course-duration').value = '';
    }
});
