local builtin = require('telescope.builtin')
vim.keymap.set('n', '<leader>ff', builtin.find_files)
vim.keymap.set('n', '<leader>fg', builtin.live_grep)
vim.keymap.set('n', '<leader>fd', builtin.diagnostics)
-- lsp specific binding
vim.keymap.set('n', 'gr', builtin.lsp_references)
vim.keymap.set('n', 'gd', builtin.lsp_definitions)
vim.keymap.set('n', 'gi', builtin.lsp_implementations)
vim.keymap.set('n', '<leader>vd', function()
    builtin.diagnostics({
        bufnr = 0
    })
end)
vim.keymap.set('n', '<leader>vs', builtin.lsp_document_symbols)
vim.keymap.set('n', '<leader>vw', builtin.lsp_workspace_symbols)

require('telescope').setup({
    defaults = {
        mappings = {
            i = {
                ["<A-j>"] = "move_selection_next",
                ["<A-k>"] = "move_selection_previous",
            }
        }
    }
})