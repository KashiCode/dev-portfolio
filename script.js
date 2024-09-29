window.onload = function() {
    var speed = 50;  // Speed in milliseconds
    var element = document.querySelector('.description');
    typeEffect(element, speed);
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    var roles = ['Student', 'Technician', 'Web Developer'];
    var currentRoleIndex = 0; // Start with the first role
    var roleElement = document.getElementById('role');
  
    // Function to update the role with a fade effect
    function updateRole() {
        roleElement.style.opacity = 0; // Make the element invisible
        setTimeout(function() {
            if (currentRoleIndex >= roles.length) {
                currentRoleIndex = 0; // Reset index if at the end
            }
            roleElement.textContent = roles[currentRoleIndex++]; // Update text
            roleElement.style.opacity = 1; // Fade in the new role
        }, 500); // Wait for half the interval (to match CSS transition)
    }
  
    setInterval(updateRole, 2000); // Change role every 3 seconds
  
    // Initialize with the first role visible
    updateRole();
  });

  function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Clear Button Function for other forms.
document.getElementById('clearButton').addEventListener('click', function() {
    window.location.reload();
  });
  