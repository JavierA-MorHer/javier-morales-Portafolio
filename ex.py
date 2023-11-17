import os
import time

from github import Github
import subprocess

# Token de acceso personal de GitHub
# Necesitas generar un token en: https://github.com/settings/tokens
ACCESS_TOKEN = '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'

# Nombre de usuario y nombre del repositorio
USER = 'JavierA-MorHer'
REPO = 'javier-morales-Portafolio'

def get_latest_commit():
    try:
        g = Github(ACCESS_TOKEN)
        user = g.get_user(USER)
        repo = user.get_repo(REPO)
        latest_commit = repo.get_commits()[0]
        return latest_commit.sha
    except Exception as e:
        print(f"Error getting latest commit: {e}")
        return None

def git_pull():
    try:
        subprocess.run(['git', 'pull'], check=True)
        print("Git pull realizado exitosamente.")
    except subprocess.CalledProcessError as e:
        print(f"Error al realizar git pull: {e}")

if __name__ == "__main__":
    last_commit = None

    while True:
        current_commit = get_latest_commit()

        if current_commit and current_commit != last_commit:
            print(f"Nuevo commit encontrado: {current_commit}")
            git_pull()
            last_commit = current_commit
        else:
            print("No hay nuevos commits. Esperando...")

        # Espera 5 minutos antes de la próxima ejecución
        time.sleep(60)  # 300 segundos = 5 minutos