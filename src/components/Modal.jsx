function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-5"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="max-w-3xl rounded-2xl border border-white/10 bg-slate-900/95 p-3" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
