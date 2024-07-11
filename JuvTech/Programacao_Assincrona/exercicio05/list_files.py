import os
import json


def list_files_in_directory(directory):
     file_paths = []
     abs_directory = os.path.abspath(directory)

     if not os.path.isdir(directory):
          print(f"Erro: O ditetório '{abs_directory}' não existe.")

     for root,dirs,files in os.walk(abs_directory):
          if not files:
               print("Nenhum arquivo encontrado nesse diretório.")

          for file in files:
               if file!="carta_costas.png":
                    abs_file_path = os.path.join(root,file)
                    rel_file_path = os.path.relpath(abs_file_path,os.getcwd())
                    file_paths.append(rel_file_path)
     
     return file_paths

def save_paths_to_json(file_paths, output_file):
     abs_directory = os.path.abspath(output_file)

     with open(abs_directory, 'w') as json_file:
          json.dump(file_paths, json_file, indent=4)

if __name__ == '__main__':
     directory = './images'
     output_file = './filePaths.json'

     file_paths = list_files_in_directory(directory)
     print(file_paths)
     
     save_paths_to_json(file_paths, output_file)

     print(f'Caminhos dos arquivos salvos em {output_file}')