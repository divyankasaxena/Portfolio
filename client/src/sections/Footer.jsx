export default function Footer() {
  return (
    <footer>
      <div className="wrap">

        <div className="fbrand">
          Divyanka<span style={{ color: "var(--accent)" }}>.</span>
        </div>

        {/* Contact Me */}
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              marginBottom: "0.8rem",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
          >
            Let's Connect
          </h3>

          <p
            style={{
              color: "var(--muted)",
              maxWidth: "600px",
              margin: "0 auto 1rem",
              lineHeight: "1.8",
            }}
          >
            Every meaningful collaboration begins with a conversation.
            Whether it's an opportunity, an idea, or just a hello —
            I'd love to hear from you.
          </p>

          <a
            href="mailto:saxenadivyanka187@gmail.com"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1rem",
            }}
          >
            ✉ saxenadivyanka187@gmail.com
          </a>
        </div>

        {/* Copyright */}
        <p>
          Designed &amp; built with care — © 2026 Divyanka Saxena. All rights reserved.
        </p>

      </div>
    </footer>
  );
}