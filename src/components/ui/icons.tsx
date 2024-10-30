import {
    AlertTriangle,
    ArrowRight,
    Check,
    ChevronLeft,
    ChevronRight,
    Command,
    CreditCard,
    File,
    FileText,
    HelpCircle,
    Image,
    Laptop,
    Loader2,
    LucideProps,
    Moon,
    MoreVertical,
    Pizza,
    Plus,
    Settings,
    SunMedium,
    Trash,
    Twitter,
    User,
    X,
    // mar-note: this commented is not to be used, but please do not remove
    // type Icon as LucideIcon,
} from "lucide-react";

export type Icon = typeof X;

export const Icons = {
    logo: Command,
    close: X,
    spinner: Loader2,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    trash: Trash,
    post: FileText,
    page: File,
    media: Image,
    settings: Settings,
    billing: CreditCard,
    ellipsis: MoreVertical,
    add: Plus,
    warning: AlertTriangle,
    user: User,
    arrowRight: ArrowRight,
    help: HelpCircle,
    pizza: Pizza,
    sun: SunMedium,
    moon: Moon,
    laptop: Laptop,
    gitHub: ({ ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"
            />
        </svg>
    ),
    microsoft: ({ ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 448"
            {...props}
        >
            <rect x="0" y="0" width="200" height="200" fill="#F25022" />
            <rect x="248" y="0" width="200" height="200" fill="#7FBA00" />
            <rect x="0" y="248" width="200" height="200" fill="#00A4EF" />
            <rect x="248" y="248" width="200" height="200" fill="#FFB900" />
        </svg>
    ),
    /**
     * mar-note: This Google is not yet finished, it is a manual svg creation, please provide 
     */
    google: ({ ...props }: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            {...props}
        >
            <path
                fill="#4285F4"
                d="M488 261.8C488 403.3 391.1 504 248 504c-137 0-248-111-248-248S111 8 248 8c66.4 0 122.2 24.4 165.1 64.6l-67.1 64.5C310.5 94.4 270.7 80 248 80c-103.5 0-187.6 85.4-187.6 187.9S144.5 456 248 456c95.7 0 131.4-68.4 137.2-104.1H248v-83.8h240c2.2 13.3 3.8 26.5 3.8 50.7z"
            />
            <path
                fill="#34A853"
                d="M119.2 311.5l-16.5 61.5-60.2 1.3c-24.1-44.4-37.9-96.1-37.9-151.3 0-28.6 5.3-56 14.5-81.2h.1l54.2 9.9 23.7 54.1c-6.5 19.4-10.1 40.1-10.1 61.2 0 23.6 4.2 46.1 11.8 66.5z"
            />
            <path
                fill="#FBBC05"
                d="M248 456c62.6 0 114.9-20.8 153.1-56.5l-73.4-61.1c-21.2 14.4-48.2 22.9-79.7 22.9-60.3 0-111.6-40.5-129.9-95.1l-74.8 61.3C86.8 408 161.3 456 248 456z"
            />
            <path
                fill="#EA4335"
                d="M119.2 200.5l-23.7-54.1-54.2-9.9h-.1c-9.2 25.2-14.5 52.6-14.5 81.2 0 55.2 13.8 106.9 37.9 151.3l74.8-61.3c-7.6-20.3-11.8-42.8-11.8-66.5 0-21.1 3.6-41.8 10.1-61.2z"
            />
        </svg>
    ),
    twitter: Twitter,
    check: Check,
};
