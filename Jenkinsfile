pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/bushrabagwan03-lab/node-ci-cd-project.git'
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Check') {
            steps {
                bat 'node --version'
            }
        }
    }
}