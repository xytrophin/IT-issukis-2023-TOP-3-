/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function openHREF(event) {
  event.preventDefault(); // Prevent the default behavior of following the link
  
  var button = event.target; // Get the clicked button
  var href = button.getAttribute('href'); // Get the href attribute value
  
  // Close the overlay smoothly
  var overlay = document.getElementById('myNav');
  overlay.style.width = '0%';
  
  // Wait for the animation to finish and perform the assigned action
  setTimeout(function() {
    if (href) {
      // Perform the assigned action (e.g., smooth scrolling)
      var targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, 100); // Adjust the delay (in milliseconds) to match the animation duration
}

function showBlog(blogId) {
  var blogSection = document.getElementById('blog-section');
  var blogTitle = document.getElementById('blog-title');
  var blogText = document.getElementById('blog-text');

  if (blogSection && blogTitle && blogText) {
    blogTitle.textContent = getBlogTitle(blogId);
    blogText.innerHTML = getBlogText(blogId);
    blogSection.style.display = 'flex';
  }
}

function hideBlog() {
  var blogSection = document.getElementById('blog-section');
  var closeButton = document.querySelector('.close-button');

  if (blogSection && closeButton) {
    closeButton.addEventListener('click', function() {
      blogSection.classList.add('hide'); // Add the hide class to trigger the slide-out animation

      // After the animation completes, hide the blog section
      setTimeout(function() {
        blogSection.style.display = 'none';
        blogSection.classList.remove('hide'); // Remove the hide class for future showBlog calls
      }, 400); // Adjust the duration (in milliseconds) to match the CSS animation duration
    });
  }
}

function getBlogTitle(blogId) {
  if (blogId === 'economy') {
    return 'Economy';
  } else if (blogId === 'logistics') {
    return 'Logistics';
  } else if (blogId === 'ai') {
    return 'Artificial Intelligence';
  }
  return '';
}

function getBlogText(blogId) {
  if (blogId === 'economy') {
    return `
      <p>With the rapid advancement of technology, the world of economics is being revolutionized. From artificial intelligence and blockchain to big data analytics and automation, emerging technologies are reshaping the way businesses operate and transforming entire industries.</p>
      <p>One area where technology has had a profound impact is financial technology, also known as FinTech. The integration of technology in financial services has resulted in innovations such as mobile payment solutions, peer-to-peer lending platforms, robo-advisors, and cryptocurrency.</p>
      <p>As an aspiring technologist, I am fascinated by the potential of these technologies to enhance efficiency, improve financial inclusion, and drive economic growth. I am eager to explore the latest trends and developments in the intersection of technology and the economy, and I believe that understanding this dynamic relationship is key to shaping a successful future in the digital age.</p>
    `;
  } else if (blogId === 'logistics') {
    return `
      <p>Logistics is a vital component of global trade and commerce, and I am fascinated by its intricate operations and the potential for technological advancements to revolutionize the industry.</p>
      <p>In recent years, we have seen the emergence of new technologies such as the Internet of Things (IoT), blockchain, and autonomous vehicles that have the potential to transform logistics operations. These technologies can improve supply chain visibility, optimize transportation routes, automate warehouse operations, and enhance overall efficiency.</p>
      <p>By staying up-to-date with the latest trends in logistics technology and understanding their implications, I hope to contribute to the development of innovative solutions that streamline supply chain processes, reduce costs, and minimize environmental impact.</p>
    `;
  } else if (blogId === 'ai') {
    return `
      <p>Artificial Intelligence (AI) is a rapidly evolving field that encompasses the development and deployment of intelligent systems capable of simulating human intelligence and performing tasks with high precision and efficiency.</p>
      <p>AI has the potential to revolutionize various industries, including healthcare, finance, transportation, and entertainment. It can analyze vast amounts of data, make predictions, automate repetitive tasks, and provide personalized recommendations.</p>
      <p>As an AI enthusiast, I am excited about the future possibilities of this technology. I believe that AI can augment human capabilities, drive innovation, and improve the quality of life. By continuously learning and experimenting with AI algorithms and frameworks, I aim to contribute to the advancement of AI and its responsible and ethical use.</p>
    `;
  }
  return '';
}

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// Function to handle section changes and apply the active class
function handleSectionChanges() {
  // Get the current scroll position
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Get all the navbar links
  var navLinks = document.getElementsByClassName('nav-link');

  // Loop through each link and check if it corresponds to the active section
  for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];
    var sectionId = link.getAttribute('href');

    // Get the corresponding section element
    var section = document.querySelector(sectionId);

    // Calculate the offset position of the section
    var sectionOffset = section.offsetTop - 50; // Adjust the offset as needed

    // Check if the scroll position is within the bounds of the section
    if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + section.offsetHeight) {
      // Remove the active class from all links
      for (var j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove('active');
      }

      // Add the active class to the current link
      link.classList.add('active');
    } else {
      // If the link was previously active, remove the active class
      link.classList.remove('active');
    }
  }
}

// Function to handle the click event of the navbar links
function openHREF(event) {
  event.preventDefault();
  var target = event.target;
  var sectionId = target.getAttribute('href');
  var section = document.querySelector(sectionId);
  var sectionOffset = section.offsetTop - 50; // Adjust the offset as needed

  // Scroll to the section smoothly
  window.scrollTo({
    top: sectionOffset,
    behavior: 'smooth'
  });
}

// Attach the handleSectionChanges function to the scroll event
window.addEventListener('scroll', handleSectionChanges);

// Call the handleSectionChanges function on page load
handleSectionChanges();
