require('vscode').load()
-- floaterm styles. They need to loaded after above
-- to avoid being overwritten
vim.cmd('hi Floaterm guibg=#002B36')
vim.cmd('hi FloatermNC guibg=#002630')
vim.cmd('hi FloatermBorder guibg=#002B36')
