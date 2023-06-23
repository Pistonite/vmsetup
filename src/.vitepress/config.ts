import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pistonite VM",
  description: "Setting up a headless Arch Linux VM in Windows Hyper-V",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/icon.png" }]
  ],
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" }
    // ],

    sidebar: [
      {
        text: "Hyper-V Setup",
        items: [
          { text: "Prerequisite", link: "/" },
          { text: "Creating VM", link: "/hyperv/create" },
          { text: "Virtual Switch", link: "/hyperv/virtual-switch" },
          { text: "Configure VM", link: "/hyperv/configure" },
        ]
      },{
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
      },{
        text: "Tooling",
        items: [
          { text: "Bash", link: "/tool/bash" },
          { text: "Yay", link: "/tool/yay" },
          { text: "Rust", link: "/tool/rust" },
          { text: "Starship", link: "/tool/starship" },
          { text: "Zoxide", link: "/tool/zoxide" },
          { text: "Zellij", link: "/tool/zellij" },
          { text: "Oxidize", link: "/tool/cargo-stuff" },
        ]
      },{
        text: "Language Support",
        items: [
          { text: "NeoVim", link: "/editor/neovim" },
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Pistonite/vmsetup" }
    ]
  }
})