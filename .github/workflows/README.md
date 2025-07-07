# GitHub Actions Workflows

## CI Workflow

The `ci.yml` workflow provides unified continuous integration for both frontend and backend components of this repository.

### Features

- **Path-based triggers**: Only runs jobs for components that have changed
  - Frontend job runs when files in `frontend/**` are modified
  - Backend job runs when files in `backend/**` are modified
- **Matrix testing**: Tests across multiple operating systems (Ubuntu 22.04, Ubuntu 24.04, Windows 2025)
- **Consistent environment**: Uses pnpm@10.5.2 and Node.js 22 for both components
- **Makefile integration**: Leverages existing Makefile targets (`make test_fe` and `make test_be`)

### Workflow Structure

1. **Changes Detection Job**: Uses `dorny/paths-filter` to detect which parts of the codebase changed
2. **Frontend Job**: Runs conditionally when frontend changes are detected
   - Installs dependencies with pnpm
   - Sets up Playwright for browser testing
   - Runs linting, testing, and building via `make test_fe`
3. **Backend Job**: Runs conditionally when backend changes are detected
   - Installs dependencies with pnpm
   - Runs testing via `make test_be`

### Migration from Previous Workflows

This unified workflow replaces the previous separate `ci-frontend.yml` and `ci-backend.yml` workflows while maintaining identical functionality and behavior.