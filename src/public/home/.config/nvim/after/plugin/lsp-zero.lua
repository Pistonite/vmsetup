local lsp = require('lsp-zero').preset({})

lsp.on_attach(function(_client, bufnr)
    lsp.default_keymaps({
        buffer = bufnr,
        omit = { 'gd', 'gr', 'gi', 'gs', '<F2>', '<F3>', '<F4>' }
    })
    vim.keymap.set('n', '<leader>r', vim.lsp.buf.rename, { buffer = bufnr })
    vim.keymap.set('n', '<leader>f', vim.lsp.buf.format, { buffer = bufnr })

    -- signature help in input mode
    vim.keymap.set('i', '<C-h>', vim.lsp.buf.signature_help, { buffer = bufnr })
end)

-- (Optional) Configure lua language server for neovim
require('lspconfig').lua_ls.setup(lsp.nvim_lua_ls())

lsp.setup()

-- auto complete setup (needs to be after lsp.setup())
local cmp = require('cmp')
cmp.setup({
    -- completion menu kep mapping
    mapping = {
        -- accept completion
        ['<CR>'] = cmp.mapping.confirm({ select = false }),
        -- trigger completion
        ['<C-n>'] = cmp.mapping.complete(),
        -- abort completion
        ['<C-e>'] = cmp.mapping.abort(),
        -- nagivate
        ['<A-k>'] = cmp.mapping.select_prev_item(),
        ['<A-j>'] = cmp.mapping.select_next_item(),
    },

    -- Installed sources:
    sources = {
        { name = 'buffer',                 keyword_length = 3 }, -- source current buffer
        { name = 'path' },                     -- file paths
        { name = 'nvim_lsp',               keyword_length = 3 }, -- from language server
        { name = 'nvim_lsp_signature_help' },  -- display function signatures with current parameter emphasized
        { name = 'nvim_lua',               keyword_length = 2 }, -- complete neovim's Lua runtime API such vim.lsp.*
    },
    window = {
        completion = cmp.config.window.bordered(),
        documentation = cmp.config.window.bordered(),
    },
    formatting = {
        fields = { 'abbr', 'kind' },
    },
})
-- Set completeopt to have a better completion experience
--
-- :help completeopt
-- menuone: popup even when there's only one match
-- noinsert: Do not insert text until a selection is made
-- noselect: Do not select, force to select one from the menu
-- shortmess: avoid showing extra messages when using completion
-- updatetime: set updatetime for CursorHold
vim.opt.completeopt = { 'menuone', 'noselect', 'noinsert' }
vim.opt.shortmess = vim.opt.shortmess + { c = true }
vim.api.nvim_set_option('updatetime', 300)

