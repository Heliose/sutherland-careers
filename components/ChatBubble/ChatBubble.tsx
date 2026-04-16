"use client";

import { useState } from "react";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import styles from "./ChatBubble.module.css";

const quickReplies = [
  "How do I apply?",
  "Remote roles available?",
  "What benefits do you offer?",
  "Tell me about Tech Step.",
];

export function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Persistent bubble */}
      <button
        type="button"
        className={`${styles.bubble} ${open ? styles.bubbleHidden : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Open career assistant chat"
      >
        <span className={styles.bubbleIcon}>
          <MessageCircle size={22} strokeWidth={1.5} />
        </span>
        <span className={styles.bubbleLabel}>Ask Sarah</span>
        <span className={styles.bubblePulse} aria-hidden />
      </button>

      {/* Panel */}
      {open && (
        <div
          className={styles.panel}
          role="dialog"
          aria-label="Career assistant"
        >
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.avatar}>
                <span className={styles.avatarOnline} />
                S
              </div>
              <div>
                <div className={styles.headerName}>Sarah</div>
                <div className={styles.headerStatus}>
                  Sutherland careers assistant
                </div>
              </div>
            </div>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={16} strokeWidth={1.5} />
            </button>
          </header>

          <div className={styles.messages}>
            <div className={styles.botMsg}>
              <p>
                Hi! I&rsquo;m Sarah, a career assistant. I can help you find
                roles, explain benefits, or walk you through how to apply.
              </p>
              <span className={styles.msgTime}>Just now</span>
            </div>
            <div className={styles.botMsg}>
              <div className={styles.typing}>
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className={styles.quickReplies}>
            {quickReplies.map((q) => (
              <button key={q} className={styles.quickReply}>
                {q}
                <ArrowRight size={10} strokeWidth={1.5} />
              </button>
            ))}
          </div>

          <form
            className={styles.inputBar}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Ask anything about Sutherland careers…"
              className={styles.input}
              aria-label="Type a message"
            />
            <button type="submit" className={styles.sendBtn} aria-label="Send">
              <Send size={16} strokeWidth={1.5} />
            </button>
          </form>

          <p className={styles.disclaimer}>
            Demo assistant · responses are not real. For actual help,{" "}
            <a href="/contact">contact our team</a>.
          </p>
        </div>
      )}
    </>
  );
}
