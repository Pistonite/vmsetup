require("autoclose").setup({
    keys = {
        ["<"] = { escape = false, close = true, pair = "<>", disabled_filetypes = {} },
        ["`"] = { escape = false, close = false, pair = "``", disabled_filetypes = {} },
        ["'"] = { escape = false, close = false, pair = "''", disabled_filetypes = {} },
    },
    options = {
        disable_when_touch = true,
    }
})
