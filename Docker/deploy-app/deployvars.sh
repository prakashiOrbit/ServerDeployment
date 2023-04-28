#!/bin/bash

installpath=/app/
tenant=apptest

######################
#CHANGE FOR NEW FLOWS TO BE ADDED
######################

declare -a deployfile=(
$installpath'farmer-0.0.1-SNAPSHOT.jar'
$installpath'Masterdata-0.0.1-SNAPSHOT.jar'
)

declare -a deploysoa=(
'AdminFlow.soa'
'MasterDataFlow.soa'
)

######################
#CHANGE FOR NEW FLOWS TO BE ADDED
######################

defenabled='AdminFlow'
defenablefeatures="basic"
defenabled='MasterDataFlow'
defenablefeatures="basic"

declare -a enableflows=(
'AdminFlow'
)

declare -a enablefeatures=(
'basic'
)

declare -a enablelinks=(
''
)


