import { Quiz } from './types/quiz';

export const Quizzes: Quiz[] = [
  {
    type: 'HTML',
    icon: 'html',
    iconColor: '#FFF1E9',
    questions: [
      {
        question: 'What does HTML stand for?',
        options: [
          'Hyper Trainer Marking Language',
          'Hyper Text Marketing Language',
          'Hyper Text Markup Language',
          'Hyper Text Markup Leveler',
        ],
        correct: 2,
      },
      {
        question:
          'Which of the following is the correct structure for an HTML document?',
        options: [
          '<html><head></head><body></body></html>',
          '<head><html></html><body></body></head>',
          '<body><head></head><html></html></body>',
          '<html><body></body><head></head></html>',
        ],
        correct: 0,
      },
      {
        question:
          'Which HTML element is used to define the title of a document?',
        options: ['<head>', '<title>', '<header>', '<top>'],
        correct: 1,
      },
      {
        question: 'What is the purpose of the <body> tag in HTML?',
        options: [
          "It defines the document's head section.",
          'It contains all the content such as text, images, and links.',
          'It is used to define the main content of an HTML document.',
          'It specifies the body of the email content in HTML.',
        ],
        correct: 1,
      },
      {
        question: 'Which HTML tag is used to create a hyperlink?',
        options: ['<hyperlink>', '<link>', '<a>', '<href>'],
        correct: 2,
      },
      {
        question: 'Which tag is used to display images in HTML?',
        options: ['<img>', '<image>', '<src>', '<pic>'],
        correct: 0,
      },
      {
        question:
          'What attribute is used to provide the path of an image in the <img> tag?',
        options: ['link', 'src', 'href', 'url'],
        correct: 1,
      },
      {
        question: 'Which HTML tag is used to create an unordered list?',
        options: ['<ul>', '<ol>', '<list>', '<li>'],
        correct: 0,
      },
      {
        question: 'What does the <br> tag do?',
        options: [
          'It breaks the text into two sections.',
          'It creates a bold text.',
          'It inserts a line break.',
          'It adds a new row in a table.',
        ],
        correct: 2,
      },
      {
        question: 'In HTML, what does the `fieldset` tag do?',
        options: [
          'It is used to group related data in a form.',
          'It sets the field to a fixed size.',
          'It automatically validates the fields within a form.',
          'It hides the fields in a form.',
        ],
        correct: 0,
      },
    ],
  },
  {
    type: 'CSS',
    icon: 'css',
    iconColor: '#E0FDEF',
    questions: [
      {
        question: 'What does CSS stand for?',
        options: [
          'Colorful Style Sheets',
          'Computer Style Sheets',
          'Cascading Style Sheets',
          'Creative Style Sheets',
        ],
        correct: 2,
      },
      {
        question: 'Which HTML attribute is used to define inline styles?',
        options: ['styles', 'style', 'class', 'font-style'],
        correct: 1,
      },
      {
        question: 'How do you insert a comment in a CSS file?',
        options: [
          '// this is a comment //',
          '/* this is a comment */',
          '-- this is a comment --',
          '<!-- this is a comment -->',
        ],
        correct: 1,
      },
      {
        question:
          'Which property is used to change the background color of an element?',
        options: ['color', 'bgcolor', 'background-color', 'background'],
        correct: 2,
      },
      {
        question: 'How do you apply a style to all <p> elements?',
        options: ['p { }', '.p { }', '#p { }', 'all.p { }'],
        correct: 0,
      },
      {
        question: 'Which property is used to change the font of an element?',
        options: ['font-style', 'text-style', 'font-family', 'typeface'],
        correct: 2,
      },
      {
        question:
          'How do you make each word in a text start with a capital letter?',
        options: [
          'text-transform: capitalize',
          'text-transform: uppercase',
          'text-style: capital',
          'font-transform: capitalize',
        ],
        correct: 0,
      },
      {
        question: "How do you select an element with the class name 'header'?",
        options: ['.header', '#header', 'header', '*header'],
        correct: 0,
      },
      {
        question: "What is the default value of the 'position' property?",
        options: ['relative', 'fixed', 'absolute', 'static'],
        correct: 3,
      },
      {
        question: 'What is the purpose of the z-index property in CSS?',
        options: [
          'To count the number of elements',
          'To set the magnification level of an element',
          'To specify the stack order of an element',
          'To create a zoom effect',
        ],
        correct: 2,
      },
    ],
  },
  {
    type: 'JavaScript',
    icon: 'js',
    iconColor: '#EBF0FF',
    questions: [
      {
        question:
          "Which syntax is correct to output 'Hello World' in an alert box?",
        options: [
          "alertBox('Hello World');",
          "msg('Hello World');",
          "alert('Hello World');",
          "msgBox('Hello World');",
        ],
        correct: 2,
      },
      {
        question: "How do you call a function named 'myFunction'?",
        options: [
          'call function myFunction()',
          'call myFunction()',
          'myFunction()',
          'execute myFunction()',
        ],
        correct: 2,
      },
      {
        question: 'How to write an IF statement in JavaScript?',
        options: ['if i = 5 then', 'if (i == 5)', 'if i == 5', 'if i = 5'],
        correct: 1,
      },
      {
        question:
          "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: [
          'if (i <> 5)',
          'if i =! 5 then',
          'if (i != 5)',
          'if i not = 5',
        ],
        correct: 2,
      },
      {
        question: 'How does a FOR loop start?',
        options: [
          'for (i = 0; i <= 5)',
          'for i = 1 to 5',
          'for (i <= 5; i++)',
          'for (i = 0; i <= 5; i++)',
        ],
        correct: 3,
      },
      {
        question: 'How can you add a single-line comment in JavaScript?',
        options: [
          "'This is a single-line comment",
          '//This is a single-line comment',
          '<!--This is a single-line comment-->',
          '/* This is a single-line comment */',
        ],
        correct: 1,
      },
      {
        question: 'What is the correct way to write a JavaScript array?',
        options: [
          "var colors = (1:'red', 2:'green', 3:'blue')",
          "var colors = ['red', 'green', 'blue']",
          "var colors = 'red', 'green', 'blue'",
          "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        ],
        correct: 1,
      },
      {
        question:
          'How do you find the number with the highest value of x and y?',
        options: [
          'Math.ceil(x, y)',
          'top(x, y)',
          'Math.max(x, y)',
          'Math.highest(x, y)',
        ],
        correct: 2,
      },
      {
        question: 'Which operator is used to assign a value to a variable?',
        options: ['-', '*', '=', 'x'],
        correct: 2,
      },
      {
        question: 'What is the correct way to write a JavaScript object?',
        options: [
          "var person = {firstName: 'John', lastName: 'Doe'};",
          "var person = {firstName = 'John', lastName = 'Doe'};",
          "var person = (firstName: 'John', lastName: 'Doe');",
          "var person = (firstName = 'John', lastName = 'Doe');",
        ],
        correct: 0,
      },
    ],
  },
  {
    type: 'Accessibility',
    icon: 'a11y',
    iconColor: '#F6E7FF',
    questions: [
      {
        question: "What does 'WCAG' stand for?",
        options: [
          'Web Content Accessibility Guidelines',
          'Web Compliance Accessibility Guide',
          'Web Content Accessibility Goals',
          'Website Compliance and Accessibility Guidelines',
        ],
        correct: 0,
      },
      {
        question:
          'Which element is used to provide alternative text for images for screen reader users?',
        options: [
          '<alt>',
          '<figcaption>',
          '<description>',
          "<img alt='description'>",
        ],
        correct: 3,
      },
      {
        question: 'What does ARIA stand for in web development?',
        options: [
          'Accessible Rich Internet Applications',
          'Advanced Responsive Internet Assistance',
          'Accessible Responsive Internet Applications',
          'Automated Responsive Internet Actions',
        ],
        correct: 1,
      },
      {
        question: 'Which of the following is not a principle of the WCAG?',
        options: ['Perceivable', 'Dependable', 'Operable', 'Understandable'],
        correct: 1,
      },
      {
        question:
          'Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?',
        options: ['3:1', '4.5:1', '7:1', '2:1'],
        correct: 1,
      },
      {
        question:
          "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
        options: ['<div>', '<span>', "<a href='...'>", '<p>'],
        correct: 2,
      },
      {
        question:
          "What is the purpose of the 'lang' attribute in an HTML page?",
        options: [
          'To specify the scripting language',
          'To define the character set',
          'To indicate the language of the page content',
          'To declare a language pack',
        ],
        correct: 2,
      },
      {
        question:
          'Which guideline ensures that content is accessible by keyboard as well as by mouse?',
        options: [
          'Keyboard Accessible',
          'Mouse Independence',
          'Device Independence',
          'Operable Controls',
        ],
        correct: 0,
      },
      {
        question:
          "What is the role of 'skip navigation' links in web accessibility?",
        options: [
          'To skip over primary navigation to the main content',
          'To provide shortcuts to different sections of the website',
          'To help users skip unwanted sections like advertisements',
          'To bypass broken links in the navigation',
        ],
        correct: 0,
      },
      {
        question:
          'Which of these tools can help in checking the accessibility of a website?',
        options: [
          'W3C Validator',
          'Google Lighthouse',
          'CSS Validator',
          'JavaScript Console',
        ],
        correct: 1,
      },
    ],
  },
];
