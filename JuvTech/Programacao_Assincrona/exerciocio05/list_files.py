import os
import json


def list_files_in_directory(directory):
     file_paths = []
     abs_directory = os.path.abspath(directory)

     if not os.path.isdir(directory):
          print(f"Erro: O ditetório '{abs_directory}' não existe.")

     for root,dirs,files in os.walk(abs_directory):
          for file in files:
               file_paths.append(os.path.join(root,file))
     
     return file_paths

def save_paths_to_json(file_paths, output_file):
     with open(output_file, 'w') as json_file:
          json.dump(file_paths, json_file, indent=4)

if __name__ == '__main__':
     directory = './images'
     output_file = './filePaths.json'

     file_paths = list_files_in_directory(directory)
     print(file_paths)
     #save_paths_to_json(file_paths, output_file)

     #print(f'Caminhos dos arquivos salvos em {output_file}')