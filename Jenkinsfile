 pipeline {
    agent any
    
    options {
            ansiColor('xterm')
        }
    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/hadamesvsilva/exerciciomodulo11.git'
            }
        }
        stage('Instalar dependencias'){
            steps {
                bat 'npm install'
            }
        }
        stage('Executar Testes'){
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}