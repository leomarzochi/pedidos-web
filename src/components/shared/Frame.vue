<template>
    <v-app class="frame">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 md8>
                        <v-card class="elevation-2">
                            <v-toolbar dark flat color="primary">
                                <v-toolbar-title>
                                    <slot name="title"></slot>
                                </v-toolbar-title>
                                <v-spacer></v-spacer>
                                <slot name="button"></slot>
                            </v-toolbar>
                            <slot name="content">slot name content</slot>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
