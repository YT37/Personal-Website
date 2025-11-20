"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Unlock, X } from "lucide-react";

interface SecretModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SecretModal = ({ isOpen, onClose }: SecretModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          className="bg-void border border-neon-accent/50 p-8 rounded-lg max-w-md w-full relative shadow-[0_0_50px_rgba(6,182,212,0.2)]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-16 h-16 rounded-full bg-neon-accent/10 flex items-center justify-center border border-neon-accent/30 animate-pulse">
              <Unlock className="text-neon-accent" size={32} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-2 font-orbitron tracking-wider">
                SYSTEM OVERRIDE
              </h2>
              <p className="text-slate-400 font-mono text-sm">
                Access granted. You've found the developer backdoor.
              </p>
            </div>

            <div className="w-full bg-slate-900/50 p-4 rounded border border-white/5 font-mono text-xs text-left text-green-400">
              <p>{`> initiating handshake...`}</p>
              <p>{`> bypassing firewall...`}</p>
              <p>{`> access_level: admin`}</p>
              <p className="animate-pulse">{`> waiting for input_`}</p>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2 bg-neon-accent/10 hover:bg-neon-accent/20 text-neon-accent border border-neon-accent/50 rounded transition-all duration-300 font-mono text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              Close Session
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SecretModal;
