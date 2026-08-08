import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("abtalks_logged_in");

  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

function SignIn() {
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isSignUp && !name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (isSignUp) {
      localStorage.setItem("abtalks_name", name.trim());
    } else if (!localStorage.getItem("abtalks_name")) {
      localStorage.setItem("abtalks_name", "Rahul");
    }

    localStorage.setItem("abtalks_email", email.trim());
    localStorage.setItem("abtalks_logged_in", "true");

    navigate("/dashboard");
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <Link to="/" className="auth-logo">
          <span className="logo-dot"></span>
          ABTalks
        </Link>

        <div className="auth-content">
          <p className="section-label">
            {isSignUp ? "JOIN ABTALKS" : "WELCOME BACK"}
          </p>

          <h1>
            {isSignUp ? (
              <>
                Start your
                <br />
                <span>60-day journey.</span>
              </>
            ) : (
              <>
                Welcome
                <br />
                <span>back.</span>
              </>
            )}
          </h1>

          <p className="auth-subtitle">
            {isSignUp
              ? "Create your account and start building every day."
              : "Sign in to continue your coding journey."}
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            {isSignUp && (
              <div>
                <label className="input-label" htmlFor="name">
                  NAME
                </label>

                <input
                  id="name"
                  className="proof-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
            )}

            <div>
              <label className="input-label" htmlFor="email">
                EMAIL
              </label>

              <input
                id="email"
                className="proof-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="input-label" htmlFor="password">
                PASSWORD
              </label>

              <input
                id="password"
                className="proof-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                autoComplete={
                  isSignUp ? "new-password" : "current-password"
                }
              />
            </div>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="primary-btn auth-submit">
              {isSignUp ? "Create account" : "Sign in"}
              <span>→</span>
            </button>
          </form>

          <div className="auth-switch">
            <span>
              {isSignUp
                ? "Already have an account?"
                : "Don't have an account?"}
            </span>

            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
              }}
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </div>

          <Link to="/" className="auth-back">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

function Landing() {
  return (
    <main className="app">
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-dot"></span>
          ABTalks
        </Link>

        <Link to="/signin" className="login-btn">
          Sign in
        </Link>
      </nav>

      <section className="hero">
        <div className="eyebrow">● 60-DAY CODING CHALLENGE</div>

        <h1>
          Build every day.
          <br />
          <span>Become visible.</span>
        </h1>

        <p className="hero-text">
          Turn 60 days of consistent coding into proof of work that recruiters
          can actually see.
        </p>

        <Link to="/signin" className="primary-btn">
          Start your 60-day journey <span>→</span>
        </Link>

        <div className="trust-row">
          <div className="avatars">
            <span>R</span>
            <span>A</span>
            <span>S</span>
            <span>+</span>
          </div>

          <p>
            Built by <strong>Indian college students</strong>
          </p>
        </div>
      </section>

      <section className="journey">
        <div className="section-label">HOW IT WORKS</div>

        <h2>
          One day at a time.
          <br />
          <span>One stronger you.</span>
        </h2>

        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>

            <div>
              <h3>Pick your track</h3>
              <p>Choose a path that matches where you want to grow.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">02</div>

            <div>
              <h3>Build every day</h3>
              <p>Complete one practical coding mission each day.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">03</div>

            <div>
              <h3>Prove your work</h3>
              <p>Submit your GitHub commit and LinkedIn post.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-card">
        <div className="proof-icon">✦</div>

        <p className="proof-small">YOUR PROGRESS</p>

        <div className="progress-top">
          <strong>Day 21 of 60</strong>
          <span>35%</span>
        </div>

        <div className="progress-bar">
          <div></div>
        </div>

        <div className="proof-bottom">
          <span>🔥 12 day streak</span>
          <span>21 builds</span>
        </div>
      </section>

      <section className="final-cta">
        <div className="section-label">YOUR JOURNEY STARTS HERE</div>

        <h2>
          Don't just learn.
          <br />
          <span>Show the world.</span>
        </h2>

        <Link to="/signin" className="primary-btn">
          Start building <span>→</span>
        </Link>
      </section>

      <footer>
        <div className="logo">
          <span className="logo-dot"></span>
          ABTalks
        </div>

        <p>Learn · Build · Prove · Grow</p>
      </footer>
    </main>
  );
}

function Dashboard() {
  const navigate = useNavigate();

  const name = localStorage.getItem("abtalks_name") || "Rahul";

  const handleLogout = () => {
    localStorage.removeItem("abtalks_logged_in");
    navigate("/signin");
  };

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <div className="section-label">
            ABTALKS / 60-DAY CHALLENGE
          </div>

          <h1>Good evening, {name}.</h1>

          <p className="dashboard-subtitle">
            Keep your momentum going. Your next proof of work is waiting.
          </p>
        </div>

        <div className="dashboard-actions">
          <Link to="/" className="back-link">
            ← Home
          </Link>

          <button onClick={handleLogout} className="logout-btn">
            Sign out
          </button>
        </div>
      </header>

      <section className="streak-card">
        <div>
          <p className="card-label">CURRENT STREAK</p>

          <div className="streak-number">
            12 <span>days</span>
          </div>

          <p className="muted">Best streak: 18 days</p>
        </div>

        <div className="fire">🔥</div>
      </section>

      <section className="progress-card">
        <div className="progress-heading">
          <div>
            <p className="card-label">CHALLENGE PROGRESS</p>

            <h2>Day 21 of 60</h2>
          </div>

          <strong>35%</strong>
        </div>

        <div className="large-progress">
          <div></div>
        </div>

        <div className="progress-meta">
          <span>21 completed</span>
          <span>39 remaining</span>
        </div>
      </section>

      <section className="today-card">
        <div className="today-top">
          <div>
            <p className="card-label">TODAY'S MISSION</p>

            <h2>Build a responsive portfolio card</h2>
          </div>

          <span className="day-badge">DAY 21</span>
        </div>

        <p className="mission-description">
          Create a reusable profile card with HTML, CSS and responsive
          behaviour. Ship it before midnight and submit your proof.
        </p>

        <div className="mission-checklist">
          <div>✓ Build the component</div>
          <div>✓ Push your GitHub commit</div>
          <div>○ Share your LinkedIn post</div>
        </div>

        <Link to="/day/12" className="primary-btn mission-button">
          Open today's challenge <span>→</span>
        </Link>
      </section>

      <section className="achievement-section">
        <div className="section-label">YOUR PROOF OF WORK</div>

        <div className="achievement-grid">
          <div className="achievement">
            <span>⚡</span>
            <strong>21</strong>
            <p>Builds shipped</p>
          </div>

          <div className="achievement">
            <span>🔥</span>
            <strong>12</strong>
            <p>Current streak</p>
          </div>

          <div className="achievement">
            <span>🏆</span>
            <strong>3</strong>
            <p>Achievements</p>
          </div>
        </div>
      </section>

      <section className="recovery-card">
        <div>
          <p className="card-label">SMART RECOVERY</p>

          <h2>Missed yesterday?</h2>

          <p>
            Don't break your momentum. Complete today's mission first, then
            use the recovery task to catch up.
          </p>
        </div>

        <span className="recovery-icon">↗</span>
      </section>
    </main>
  );
}

function ChallengeDay() {
  const [submitted, setSubmitted] = React.useState(false);

  const [github, setGithub] = React.useState("");
  const [linkedin, setLinkedin] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!github.trim() || !linkedin.trim()) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <div className="section-label">ABTALKS / DAY 12</div>

          <h1>Build. Prove. Repeat.</h1>

          <p className="dashboard-subtitle">
            Today's mission is designed to create something you can proudly
            show in your portfolio.
          </p>
        </div>

        <Link to="/dashboard" className="back-link">
          ← Dashboard
        </Link>
      </header>

      <section className="today-card">
        <p className="card-label">TODAY'S TASK</p>

        <h2>Build a responsive portfolio card</h2>

        <p className="mission-description">
          Create a clean, responsive profile card using HTML and CSS. The card
          should include a profile image, name, role, short bio and a call to
          action.
        </p>

        <div className="mission-checklist">
          <div>○ Responsive on mobile and desktop</div>
          <div>○ Clean semantic HTML</div>
          <div>○ Modern CSS styling</div>
          <div>○ Push the finished work to GitHub</div>
        </div>
      </section>

      <section className="progress-card">
        <p className="card-label">WHAT GOOD LOOKS LIKE</p>

        <h2>Ship something you can explain.</h2>

        <p className="mission-description">
          Your submission doesn't need to be huge. It should be complete,
          understandable and something you would be comfortable showing a
          recruiter.
        </p>

        <div className="mission-checklist">
          <div>✓ Works at 390px mobile width</div>
          <div>✓ No broken layout</div>
          <div>✓ Public GitHub repository</div>
          <div>✓ Clear README</div>
        </div>
      </section>

      <section className="today-card">
        <p className="card-label">PROOF OF WORK</p>

        <h2>Submit today's work</h2>

        <p className="mission-description">
          Your daily proof makes your learning visible. Add both links when
          your work is ready.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="input-label" htmlFor="github">
            GITHUB REPOSITORY / COMMIT
          </label>

          <input
            id="github"
            className="proof-input"
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="https://github.com/yourname/project"
          />

          <label className="input-label" htmlFor="linkedin">
            LINKEDIN POST
          </label>

          <input
            id="linkedin"
            className="proof-input"
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/posts/..."
          />

          <button type="submit" className="primary-btn submit-btn">
            {submitted ? "✓ Proof submitted" : "Submit proof"}
            <span>{submitted ? "✓" : "→"}</span>
          </button>
        </form>
      </section>

      <section className="recovery-card">
        <div>
          <p className="card-label">MOMENTUM RECOVERY</p>

          <h2>Missed a day? Keep moving.</h2>

          <p>
            Missing one day shouldn't make you quit. Complete today's mission
            first, then ABTalks automatically gives you a lightweight recovery
            task to rebuild your streak.
          </p>

          <div className="mission-checklist">
            <div>✓ Complete today's mission</div>
            <div>✓ Finish the 10-minute recovery task</div>
            <div>✓ Restore your learning momentum</div>
          </div>
        </div>

        <span className="recovery-icon">→</span>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/signin" element={<SignIn />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/day/12"
          element={
            <ProtectedRoute>
              <ChallengeDay />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
