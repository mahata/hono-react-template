test_fe:
	@echo "Running frontend tests"
	cd frontend && pnpm run lint && pnpm test && pnpm run build

test_be:
	@echo "Running backend tests"
	cd backend && pnpm test

pre-commit:
	@echo "(Expected to) Running pre-commit hooks"
	$(MAKE) test_fe
	$(MAKE) test_be
