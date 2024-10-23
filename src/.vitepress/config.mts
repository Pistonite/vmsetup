import { defineConfig } from "vitepress"

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
        text: "Windows Tools",
        items: [
            { text: "Environment", link: "/windows/env" },
            { text: "Terminal", link: "/windows/terminal" },
            { text: "VS Code", link: "/windows/vscode" },
            { text: "Notepad", link: "/windows/notepad" },
            { text: "Utilities", link: "/windows/utilities" },
            { text: "Zig", link: "/windows/zig" },
            { text: "Next Steps", link: "/windows/next"},
        ]
    },
    {
        text: "Windows Extras",
        items: [
            { text: "LiveSplit", link: "/windows/livesplit" }
        ]
    }
];

const hypervSidebar = [
    {
        text: "Hyper-V Setup",
        items: [
            { text: "Getting Started", link: "/hyperv/" },
            { text: "Creating VM", link: "/hyperv/create" },
            { text: "Virtual Switch", link: "/hyperv/virtual-switch" },
            { text: "Configure VM", link: "/hyperv/configure" },
            { text: "Connect to a VM", link: "/hyperv/connect" },
            { text: "Next Steps", link: "/hyperv/next" },
        ]
    }
];

const archSidebar = [
    {
        text: "System Install",
        items: [
            { text: "Getting Started", link: "/arch/" },
            { text: "Getting the Image", link: "/arch/download-iso" },
            { text: "Boot Live Environment", link: "/arch/boot-installer" },
            { text: "Preinstall Checks", link: "/arch/preinstall-checks" },
            { text: "Disk Setup", link: "/arch/disk-setup" },
            { text: "Essential Packages", link: "/arch/essential-packages" },
            { text: "Configure the System", link: "/arch/configure" },
            { text: "Configure Boot Loader", link: "/arch/boot-loader" },
            { text: "Configure User", link: "/arch/user" },
            { text: "Essential Tools", link: "/arch/essential-tools" },
            { text: "Next Steps", link: "/arch/next" },
        ]
    },
    {
        text: "Desktop Environment",
        items: [
            { text: "TODO", link: "/arch/de/" },
        ]
    },
    {
        text: "Arch Essentials",
        items: [
            { text: "TODO", link: "/arch/tool/essentials" },
        ]
    },
];

const toolSidebar = [
    {
        text: "Essentials",
        items: [
            { text: "Rust", link: "/tool/rust" },
            { text: "Git", link: "/tool/git" },
            { text: "Dotbin", link: "/tool/dotbin" },
            { text: "7-Zip", link: "/tool/7zip" },
            { text: "CMake", link: "/tool/cmake" },
            { text: "Ninja", link: "/tool/ninja" },
        ]
    },
    {
        text: "Recommended",
        items: [
            { text: "Starship", link: "/tool/starship" },
            { text: "Task", link: "/tool/task" },
            { text: "Neovim", link: "/tool/nvim" },
            { text: "Zoxide + fzf", link: "/tool/zoxide"},
        ]
    },
    {
        text: "Runtime/Toolchain",
        items: [
            { text: "Python", link: "/tool/python" },
            { text: "Node + Deno", link: "/tool/node" },
            { text: "Go", link: "/tool/go" },
           // { text: "NX", link: "/tool/nx" },
        ]
    },
    {
        text: "Extras",
        items: [
            { text: "VM Certificate", link: "/tool/https" },
            
           // { text: "Basic Tools", link: "/tool/basic-tools" },
           // { text: "Configure Shell", link: "/tool/config" },
           // { text: "Docker", link: "/tool/docker" },
           // { text: "DevKitPro", link: "/tool/devkitpro" },
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
          { text: "Production", link: "/prod/" },
        ],
        sidebar: {
            "/windows/": windowsSidebar,
            "/hyperv/": hypervSidebar,
            "/arch/": archSidebar,
            "/tool/": toolSidebar,
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/Pistonite/vmsetup" }
        ]
    }
})
