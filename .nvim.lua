if vim.fn.filereadable(".pnp.cjs") == 1 then
	vim.lsp.start({
		name = "tsserver-pnp",
		cmd = { "yarn", "dlx", "@yarnpkg/pnpify", "tsserver", "--stdio" },
		root_dir = vim.loop.cwd(),
	})
end
