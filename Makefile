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