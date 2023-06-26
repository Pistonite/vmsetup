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
          { text: "Getting Started", link: "/" },
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
        text: "Install Stuff",
        items: [
          { text: "Basic Tools", link: "/tool/basic-tools" },
          { text: "Version Switchers", link: "/tool/version-switcher" },
          { text: "Configure Shell", link: "/tool/config" },
          { text: "Docker" , link: "/tool/docker" },
          { text: "Node", link: "/tool/node" },
          { text: "Python", link: "/tool/python" },
          { text: "Git", link: "/tool/git" },
          { text: "Neovim", link: "/tool/nvim" },
          { text: "TODO", link: "/tool/todo" },
        ]
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Pistonite/vmsetup" }
    ]
  }
})
