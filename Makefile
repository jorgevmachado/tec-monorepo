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

clean-dependencies-builds:
	make ui-clean
	make ds-clean
	make business-clean
	make tokens-clean
	make services-clean

clean-all: clean-dependencies clean-dependencies-builds
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- INSTALL ------------------------------------------------------------#
install:
	yarn
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------ BUILD DEPENDENCIES --------------------------------------------------------#
services-build:
	$(call run_project,packages/services,build)

tokens-build:
	$(call run_project,packages/tokens,build)

business-build:
	$(call run_project,packages/business,build)

build-dependencies:
	make services-build
	make tokens-build
	make business-build

#------------------------------------------------- END ----------------------------------------------------------------#

#--------------------------------------------- SETUP DEPENDENCIES -----------------------------------------------------#
setup:
	make clean-all
	make install
	make build-dependencies

#------------------------------------------- DEPENDENCIES BRAND FINANCE -----------------------------------------------#
ds-finance-storybook:
	$(call run_project,packages/ds,storybook:finance)

ds-finance-watch:
	$(call run_project,packages/ds,watch:finance)

ui-finance-watch:
	$(call run_project,packages/ds,build:finance)
	$(call run_project,packages/ui,watch:finance)

ui-finance-storybook:
	$(call run_project,packages/ds,build:finance)
	$(call run_project,packages/ui,storybook:finance)

build-finance-dependencies:
	$(call run_project,packages/ds,build:finance)
	$(call run_project,packages/ui,build:finance)

setup-finance:
	make setup
	$(call run_project,packages/ds,build:finance)
	$(call run_project,packages/ui,build:finance)
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------- DEPENDENCIES BRAND GEEK --------------------------------------------------#
ds-geek-storybook:
	$(call run_project,packages/ds,storybook:geek)

ds-geek-watch:
	$(call run_project,packages/ds,watch:geek)

ui-geek-watch:
	$(call run_project,packages/ds,build:geek)
	$(call run_project,packages/ui,watch:geek)

ui-geek-storybook:
	$(call run_project,packages/ds,build:geek)
	$(call run_project,packages/ui,storybook:geek)

build-geek-dependencies:
	$(call run_project,packages/ds,build:geek)
	$(call run_project,packages/ui,build:geek)

setup-geek:
	make setup
	$(call run_project,packages/ds,build:geek)
	$(call run_project,packages/ui,build:geek)
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------- DEPENDENCIES BRAND LAW ---------------------------------------------------#
ds-law-storybook:
	$(call run_project,packages/ds,storybook:law)

ds-law-watch:
	$(call run_project,packages/ds,watch:law)

ui-law-watch:
	$(call run_project,packages/ds,build:law)
	$(call run_project,packages/ui,watch:law)

ui-law-storybook:
	$(call run_project,packages/ds,build:law)
	$(call run_project,packages/ui,storybook:law)

build-law-dependencies:
	$(call run_project,packages/ds,build:law)
	$(call run_project,packages/ui,build:law)

setup-law:
	make setup
	$(call run_project,packages/ds,build:law)
	$(call run_project,packages/ui,build:law)
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- GEN ----------------------------------------------------------------#
service-gen:
	$(call run_project,packages/services,gen)

business-gen:
	$(call run_project,packages/business,gen)

ds-gen:
	$(call run_project,packages/ds,gen)

ui-gen:
	$(call run_project,packages/ui,gen)
#------------------------------------------------- END ----------------------------------------------------------------#