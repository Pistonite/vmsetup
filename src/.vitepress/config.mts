import { defineConfig } from "vitepress"

const archSidebar = [
    {
        text: "Hyper-V Setup",
        items: [
            { text: "Getting Started", link: "/arch/" },
            { text: "Creating VM", link: "/hyperv/create" },
            { text: "Virtual Switch", link: "/hyperv/virtual-switch" },
            { text: "Configure VM", link: "/hyperv/configure" },
        ]
    }, {
        text: "Install Arch Linux",
        items: [
            { text: "Getting the Image", link: "/arch/download-iso" },
            { text: "Boot the Installer", link: "/arch/boot-installer" },
            { text: "Preinstall Checks", link: "/arch/preinstall-checks" },
            { text: "Disk Setup", link: "/arch/disk-setup" },
            { text: "Essential Packages", link: "/arch/essential-packages" },
            { text: "Configure the System", link: "/arch/configure" },
            { text: "Configure Boot Loader", link: "/arch/boot-loader" },
            { text: "Configure User", link: "/arch/user" },
            { text: "Conclusion", link: "/arch/conclusion" },
        ]
    },
];

const windowsSidebar = [
    {
        text: "Windows Essentials",
        items: [
            { text: "Getting Started", link: "/windows/" },
            { text: "Visual Studio", link: "/windows/visual-studio" },
            { text: "Setup Essentials", link: "/windows/essentials" },
        ]
    },
    {
        text: "Setup Windows",
        items: [
            { text: "Environment", link: "/windows/env" },
            { text: "Terminal", link: "/windows/terminal" },
            { text: "VS Code", link: "/windows/vscode" },
            { text: "CMake", link: "/windows/cmake" },
            { text: "Other GNU Utils", link: "/windows/gnu" },
            { text: "Notepad", link: "/windows/notepad" },
            { text: "Zig", link: "/windows/zig" },
            { text: "Neovim", link: "/windows/nvim" },
            { text: "Dev Certificate", link: "/windows/cert" },
            { text: "Next Steps", link: "/windows/next"}
        ]
    }
];

const toolSidebar = [
    {
        text: "Essentials",
        items: [
            { text: "Rust", link: "/tool/rust" },
            { text: "Git", link: "/tool/git" },
            { text: "Dotbin", link: "/tool/dotbin" },
        ]
    },
    {
        text: "Recommended",
        items: [
            { text: "Starship", link: "/tool/starship" },
            { text: "Task", link: "/tool/task" },
        ]
    },
    {
        text: "Runtime/Toolchain",
        items: [
            { text: "Python", link: "/tool/python" },
            { text: "Node", link: "/tool/node" },
        ]
    },
    {
        text: "Extras",
        items: [
            
            { text: "Basic Tools", link: "/tool/basic-tools" },
            { text: "Configure Shell", link: "/tool/config" },
            
            { text: "Docker", link: "/tool/docker" },
            { text: "Neovim", link: "/tool/nvim" },
            { text: "HTTPS", link: "/tool/https" },
            { text: "DevKitPro", link: "/tool/devkitpro" },
        ]
    },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Pistonite VM",
    description: "Setting up a headless Arch Linux VM in Windows Hyper-V",
    cleanUrls: true,
    head: [
        ["link", { rel: "icon", href: "/icon.png" }]
    ],
    themeConfig: {
        nav: [
            { text: "Windows", link: "/windows/" },
          { text: "Hyper-V", link: "/hyperv" },
          { text: "Arch", link: "/arch/" },
          { text: "Tools", link: "/tool/" },
        ],
        sidebar: {
            "/windows/": windowsSidebar,
            "/hyperv/": archSidebar,
            "/arch/": archSidebar,
            "/tool/": toolSidebar,
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/Pistonite/vmsetup" }
        ]
    }
})
