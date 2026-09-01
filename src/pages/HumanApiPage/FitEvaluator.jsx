import { useState } from 'react';
import { buildEvaluationPrompt, MAX_PROJECT_LENGTH } from '../../utils/evaluationPrompt.js';

const AI_LABELS = ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'];

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}

function FitEvaluator() {
  const [problem, setProblem] = useState('');
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState('');

  const generate = () => {
    setPrompt(buildEvaluationPrompt(problem));
    setStatus('Portable decision packet generated. Review it before copying.');
  };

  const copy = async () => {
    const nextPrompt = prompt || buildEvaluationPrompt(problem);
    setPrompt(nextPrompt);

    try {
      await copyText(nextPrompt);
      setStatus('Copied. Paste it into the AI assistant you already trust.');
    } catch {
      setStatus('Copy failed. Select the prompt text and copy it manually.');
    }
  };

  return (
    <section className="fit-evaluator section-shell" id="evaluate" aria-labelledby="evaluate-title">
      <div className="section-index" aria-hidden="true">01 / EVALUATE</div>
      <div className="section-heading">
        <p className="eyebrow">Would you hire Amer?</p>
        <h2 id="evaluate-title">Give your problem<br />to your own AI.</h2>
        <p>
          This site does not pretend to evaluate itself. It builds an adversarial decision packet
          that tells another AI what to inspect, what to challenge, and when to say no.
        </p>
      </div>

      <div className="evaluator-panel">
        <label htmlFor="project-problem">Your actual problem</label>
        <p className="evaluator-help" id="project-problem-help">
          Included as quoted data—not instructions. The finished packet works without web access.
        </p>
        <textarea
          id="project-problem"
          value={problem}
          onChange={(event) => setProblem(event.target.value)}
          placeholder="Example: I need product photography, a premium landing page, and a fast way to validate demand before a full launch."
          rows="6"
          maxLength={MAX_PROJECT_LENGTH}
          aria-describedby="project-problem-help project-problem-count"
        />
        <div className="evaluator-meta">
          <span>Self-contained · evidence-linked</span>
          <span id="project-problem-count">{problem.length.toLocaleString()} / {MAX_PROJECT_LENGTH.toLocaleString()}</span>
        </div>
        <div className="evaluator-actions">
          <button className="button button--ink" type="button" onClick={generate}>
            Build decision packet
          </button>
          <button className="button button--plain" type="button" onClick={copy}>
            Copy prompt
          </button>
        </div>
        <p className="copy-status" role="status" aria-live="polite">{status}</p>

        {prompt && (
          <div className="prompt-output">
            <div className="prompt-output__bar">
              <span>PORTABLE_DECISION_PACKET.txt</span>
              <span>{prompt.length} characters</span>
            </div>
            <pre>{prompt}</pre>
          </div>
        )}

        <div className="ai-compatibility" aria-label="Compatible AI assistants">
          <span>Paste into</span>
          {AI_LABELS.map((label) => <span key={label}>{label}</span>)}
          <small>No partnership or endorsement implied.</small>
        </div>
      </div>
    </section>
  );
}

export default FitEvaluator;
