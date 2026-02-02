import { createFileRoute } from '@tanstack/react-router'
import { Shield, Upload, CheckSquare, File as FileIcon, X, Film, Image as ImageIcon } from 'lucide-react'
import { useState, useRef } from 'react'

export const Route = createFileRoute('/report')({
    component: ReportPage,
})

function ReportPage() {
    const [file, setFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [isDragging, setIsDragging] = useState(false)

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0])
        }
    }

    return (
        <div className="min-h-screen bg-secondary/5 py-12 px-6">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-border">
                        <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground">
                        Make a <span className="text-africa-red">Secure</span> Report
                    </h1>
                    <p className="max-w-2xl mx-auto text-muted-foreground font-medium leading-relaxed">
                        If you need to safely and anonymously deliver a report on unethical, illegal, or dangerous activities affecting an organization, complete the section below and we will deliver it immediately.
                    </p>
                </div>

                {/* Form Card */}
                <div className="relative">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-africa-gold to-africa-red" />

                    <form className="p-8 md:p-12 space-y-10" onSubmit={(e) => e.preventDefault()}>

                        {/* Context Section */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wide text-foreground">Subject organization name</label>
                                <input
                                    type="text"
                                    placeholder="Name of the organization that is the subject of this report."
                                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/40 text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wide text-foreground">Recipient's full name</label>
                                <input
                                    type="text"
                                    placeholder="Enter the full name of the intended recipient."
                                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/40 text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wide text-foreground">Recipient's email address</label>
                                <input
                                    type="email"
                                    placeholder="Enter the email address of the intended recipient."
                                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/40 text-sm"
                                />
                            </div>
                        </div>

                        <div className="w-full h-px bg-border/50" />

                        {/* Incident Details */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wide text-foreground flex items-center gap-2">
                                    <span>1. Incident title</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="E.g., Fraud at the Head Office"
                                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/40 text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wide text-foreground flex items-center gap-2">
                                    <span>2. Incident description</span>
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Describe the issue in as much specific and factual detail as possible, in chronological order and stating the names, job descriptions and contact information of involved parties..."
                                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/40 text-sm resize-none leading-relaxed"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-bold uppercase tracking-wide text-foreground flex items-center gap-2">
                                        <span>3. Attach any evidence</span>
                                    </label>
                                    <p className="text-xs text-muted-foreground">Evidence includes a document, audio file, video file or image upto 500MB. Only one attachment is allowed.</p>
                                </div>

                                <div
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`border-2 border-dashed transition-all rounded-xl bg-secondary/5 p-8 flex flex-col items-center justify-center text-center cursor-pointer group ${isDragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                                        }`}
                                >
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        onChange={handleFileSelect}
                                        accept="image/*,video/*,.pdf,.doc,.docx,.txt"
                                    />

                                    {!file ? (
                                        <>
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                                                <Upload className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </div>
                                            <p className="text-sm font-bold text-muted-foreground">
                                                Drag and Drop Media or <span className="text-primary hover:underline">Browse</span>
                                            </p>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-2 opacity-60">
                                                Supports Images, Videos & Docs
                                            </p>
                                        </>
                                    ) : (
                                        <div className="flex items-center gap-4 w-full max-w-sm bg-white p-3 rounded-lg border border-border shadow-sm">
                                            <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center text-primary shrink-0">
                                                {file.type.startsWith('image/') ? <ImageIcon className="w-5 h-5" /> :
                                                    file.type.startsWith('video/') ? <Film className="w-5 h-5" /> :
                                                        <FileIcon className="w-5 h-5" />}
                                            </div>
                                            <div className="text-left flex-1 min-w-0">
                                                <p className="text-sm font-bold text-foreground truncate">{file.name}</p>
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                                </p>
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setFile(null)
                                                    if (fileInputRef.current) fileInputRef.current.value = ''
                                                }}
                                                className="p-1 hover:bg-red-50 text-muted-foreground hover:text-red-500 rounded transition-colors"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wide text-foreground flex items-center gap-2">
                                    <span>4. Additional comments</span>
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="This includes but is not limited to investigation advice, safeguarding measures or internal control recommendations."
                                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/40 text-sm resize-none leading-relaxed"
                                />
                            </div>
                        </div>

                        <div className="w-full h-px bg-border/50" />

                        {/* Submission Section */}
                        <div className="space-y-8">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input type="checkbox" className="peer sr-only " />
                                    <div className="w-5 h-5 border-2 border-border rounded peer-checked:bg-primary peer-checked:border-primary transition-colors flex items-center justify-center text-white">
                                        <CheckSquare className="w-3 h-3 opacity-0 peer-checked:opacity-100" />
                                    </div>
                                </div>
                                <span className="text-sm text-muted-foreground font-medium pt-0.5 group-hover:text-foreground transition-colors">
                                    I submit this report in good faith and on reasonable grounds that it is true and accurate.
                                </span>
                            </label>

                            {/* Fake Captcha */}
                            <div className="p-4 bg-secondary/10 border border-border rounded-lg inline-flex flex-col gap-3 min-w-[300px]">
                                <span className="text-sm font-bold text-muted-foreground">I am not a robot</span>
                                <div className="h-12 bg-white border border-border rounded flex items-center px-4 font-mono text-xl tracking-[0.2em] opacity-50 select-none">
                                    @d(Gs
                                </div>
                                <input
                                    type="text"
                                    placeholder="Type the characters above"
                                    className="w-full px-3 py-2 bg-white border border-border rounded text-sm focus:outline-none focus:border-primary"
                                />
                            </div>

                            <div className="flex justify-end pt-4">
                                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-black uppercase tracking-widest hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all active:translate-y-0 text-sm w-full md:w-auto">
                                    Submit Report
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
