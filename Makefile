RUN:=yarn

PROJECT=tec

# STYLE #
ERROR=\x1b[41m
SUCCESS=\x1b[42m
RESET=\x1b[0m
WARN=\x1b[30;43m

#-------------------------------------------- FUNCTIONS ---------------------------------------------------------------#
define delete_dependencies
	@echo delete_dependencies $(1)
	rm -Rf ./$(1)/node_modules
endef

define delete_dependencies_build
	@echo delete_build $(1)
	rm -Rf ./$(1)/dist
endef

define delete_in_project
	@echo delete_in_project $(1) item $(2)
	rm -Rf ./$(1)/$(2)
endef

define run_project
	@echo run_project $(1) action $(2)
	cd ./$(1) && $(RUN) $(2)
endef

define run_in_workspace
	@echo ------------------------------------------------------------------------------;
	@printf "${WARN} RUNNING ${RESET}: $(1) - $(2) $(3)\n";
	@echo ;
	@$(RUN) workspace @${PROJECT}/$(1) $(2) $(3)

	@if [ $$? -eq 0 ]; then \
		printf "${SUCCESS} SUCCESS ${RESET}: $(1) - $(2) $(3)\n"; \
		echo ------------------------------------------------------------------------------; \
	fi;
endef

.PHONY: run
run:
	$(eval PROJECT := $(word 2, $(MAKECMDGOALS)))
	$(eval CMD := $(word 3, $(MAKECMDGOALS)))
	$(eval PARAMS := $(word 4, $(MAKECMDGOALS)))
	$(if $(strip $(PARAMS)), \
		$(call run_in_workspace,$(PROJECT),$(CMD),--base=/${PARAMS}/), \
		$(call run_in_workspace,$(PROJECT),$(CMD)))

%:
	@:

#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- CLEAN --------------------------------------------------------------#
clean-dependencies:
	rm -rf ./node_modules
	$(call delete_in_project,packages/ui,node_modules)
	$(call delete_in_project,packages/business,node_modules)
	$(call delete_in_project,packages/ds,node_modules)
	$(call delete_in_project,packages/tokens,node_modules)
	$(call delete_in_project,packages/services,node_modules)

services-clean:
	$(call delete_in_project,packages/services,dist)

tokens-clean:
	$(call delete_in_project,packages/tokens,dist)

ds-clean:
	$(call delete_in_project,packages/ds,dist)

business-clean:
	$(call delete_in_project,packages/business,dist)

ui-clean:
	$(call delete_in_project,packages/ui,dist)

clean-builds:
	make ui-clean
	make business-clean
	make ds-clean
	make tokens-clean
	make services-clean


clean-all: clean-dependencies clean-builds
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- INSTALL ------------------------------------------------------------#
install:
	yarn
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- BUILD --------------------------------------------------------------#
services-build-dirty:
	$(call run_project,packages/services,build)

services-build:
	make services-clean
	$(call run_project,packages/services,build)

tokens-build-dirty:
	$(call run_project,packages/tokens,build)

tokens-build:
	make tokens-clean
	$(call run_project,packages/tokens,build)

ds-build-dirty:
	$(call run_project,packages/ds,build)

ds-build:
	make ds-clean
	$(call run_project,packages/ds,build)

business-build-dirty:
	$(call run_project,packages/business,build)

business-build:
	make business-clean
	$(call run_project,packages/business,build)

ui-build-dirty:
	$(call run_project,packages/ui,build)

ui-build:
	make ui-clean
	$(call run_project,packages/ui,build)

build-dependencies-dirty:
	make services-build-dirty
	make tokens-build-dirty
	make ds-build-dirty
	make business-build-dirty
	make ui-build-dirty

build-dependencies:
	make services-build
	make tokens-build
	make ds-build
	make business-build
	make ui-build
#------------------------------------------------- END ----------------------------------------------------------------#

setup:
	make clean-all
	make install
	make build-dependencies-dirty