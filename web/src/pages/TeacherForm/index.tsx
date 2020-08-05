import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas." 
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre Aula</legend>
          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Química', label: 'Química' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Literatura', label: 'Literatura' },
              { value: 'Física', label: 'Física' },
              { value: 'Programação', label: 'Programação' },
              { value: 'Gramática', label: 'Gramática' },
              { value: 'História', label: 'História' },
              { value: 'Geografia', label: 'Geografia' },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />          
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">
              + Novo Horário
            </button>
          </legend>

          <div className="schedule-item">
          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Química', label: 'Química' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Literatura', label: 'Literatura' },
              { value: 'Física', label: 'Física' },
              { value: 'Programação', label: 'Programação' },
              { value: 'Gramática', label: 'Gramática' },
              { value: 'História', label: 'História' },
              { value: 'Geografia', label: 'Geografia' },
            ]}
          />
          <Input name="from" label="Das" type="time" />
          <Input name="to" label="Até" type="time" />
          </div>
        </fieldset>

        <footer>
          <p><img src={warningIcon} alt="Aviso!"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar Cadastro
          </button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
