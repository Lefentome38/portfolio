# Template

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

<!-- encien html -->
```html 
<header>
  <h1>portfolio</h1>
  <button></button>
  <button></button>
</header>
<div class="pageExperiencePhoto">
  <div class="ExperienceCard">
    <div class="switch">
      <div>
        <button class="triangle-btn left" onclick="alert('left')"></button>
      </div>
      <h2>Experience</h2>
      <div>
        <button class="triangle-btn right" onclick="alert('right')"></button>
      </div>
    </div>
    <div class="conteinerCard">
      <div class="card">
        <p style="color: #72F2F2; font-size: 20px;">Simplon Grenoble</p>
        <h3 style="font-size: 30px;">Projet chef d'oeuvre</h3>
        <p style="font-size: 15px;">mai 2023 - avril 2024</p>
        <p style="font-size: 20px; margin: 8% 2% 8% 2%;">Développemnt d'une application mobile en équipe (3 persones)</p>
        <p style="margin-bottom: 0; font-size: 18px;">Mission</p>
        <ul>
          <li>wireframe/maquettage</li>
          <li>Gestion de projet</li>
          <li>Vesoin utilisateur</li>
          <li>Gantt</li>
          <li>Dévelopement</li>
          <li>UX/UI</li>
          <li>Git-Flow</li>
        </ul>
      </div>
      <div class="card">
        <p style="color: #72F2F2; font-size: 20px;">Simplon Grenoble</p>
        <h3 style="font-size: 30px;">Projet chef d'oeuvre</h3>
        <p style="font-size: 15px;">mai 2023 - avril 2024</p>
        <p style="font-size: 20px; margin: 8% 2% 8% 2%;">Développemnt d'une application mobile en équipe (3 persones)</p>
        <p style="margin-bottom: 0; font-size: 18px;">Mission</p>
        <ul>
          <li>wireframe/maquettage</li>
          <li>Gestion de projet</li>
          <li>Vesoin utilisateur</li>
          <li>Gantt</li>
          <li>Dévelopement</li>
          <li>UX/UI</li>
          <li>Git-Flow</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="photoContact">
    <div class="photoCard">
      <div class="containerPhoto">
        <img src="assets/images/IMG_8466.jpg" alt="photoProfil">
      </div>
      <p>Contact</p>
        <ul>
          <li>rambaudaymeric&#64;gmail.com</li>
          <li>07 86 13 83 13</li>
          <li>23 ans</li>
          <li>Grenoble</li>
        </ul>
    </div>
  </div>
</div>

<div class="transition"></div>

<app-logo-techno techno="angular"></app-logo-techno>
<app-logo-techno techno="css"></app-logo-techno>
<app-logo-techno techno="docker"></app-logo-techno>
<app-logo-techno techno="figma"></app-logo-techno>
<app-logo-techno techno="git"></app-logo-techno>
<app-logo-techno techno="github"></app-logo-techno>
<app-logo-techno techno="gitlab"></app-logo-techno>
<app-logo-techno techno="html"></app-logo-techno>
<app-logo-techno techno="fsfsefdfe"></app-logo-techno>
<app-logo-techno techno="java"></app-logo-techno>
<app-logo-techno techno="js"></app-logo-techno>
<app-logo-techno techno="nodejs"></app-logo-techno>
<app-logo-techno techno="react"></app-logo-techno>
<app-logo-techno techno="sql"></app-logo-techno>

```

```css
header {
  background-color: black;
  height: 60px;
  display: flex;
  justify-content: center;

  h1 {
    color: white;
    margin: 0.2em;
  }

  button {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin: 0.5em;
  }
}

.pageExperiencePhoto {
  height: 800px;

  display: flex;

  border: solid blue 2px;

  .ExperienceCard {
    width: 100%;
    
    .switch {
      display: flex;
      align-items: center;

      height: 20%;

      margin-left: 50px;

      h2 {
        font-size: 50px;
      }

      .triangle-btn {
        width: 0;
        height: 0;
        background: transparent;
        border: none;
        cursor: pointer;
      }
      
      .left {
          border-top: 20px solid transparent;
          border-bottom: 20px solid transparent;
          border-right: 30px solid black;
      }

      .right {
          border-top: 20px solid transparent;
          border-bottom: 20px solid transparent;
          border-left: 30px solid black;
      }
    
      div {
        margin: 2%;
      }

    }
    
    .conteinerCard {
      height: 60%;
      width: 80%;

      display: flex;
      justify-content: space-around;

      .card{
        margin: 2%;

        height: 100%;
        width: 30%;
        box-shadow: #6d6d6d 20px 20px 1em;


        background-color: #D9D9D9;
        border: solid #0FC9F2 2px;
        border-radius: 10px;

        p, h3 {
          text-align: start;
          margin: 2%;
        }

        ul {
          margin: 0;
          
          li {
            margin-top: 2%;
          }
        }
      }
    }
  }

  .photoContact {
    width: 40%;

    *{
      margin: 4%;
      font-size: 20px;
    }

    .photoCard{
      border: solid #0FC9F2 2px;
      border-radius: 10px;      
      background-color: #D9D9D9;
      box-shadow: #6d6d6d 20px 20px 1em;

      margin: 5%;
      height: 80%;

      .containerPhoto{

        display: flex;
        justify-content: center;
        
        img {
          border: solid #72F2F2 2px;
          border-radius: 50%;
          height: 300px;
          width: 300px;
          
        }
      }

      p {
        text-align: center;
        font-size: 40px;
      }
    }

  }
}

.transition {
  background-color: blue;
  height: 50px;
}

```