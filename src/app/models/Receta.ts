export interface RecetaInterface {
	id?: string; // El "?" especifica que el campo no es requerido u obligatorio
	titulo?: string;
	descripcion?: string;
	preparacion?: string;
	ingredientes?: string;
	temporada?: string;
	fechaPublicacion?: any;
	userId?: string;
	userNombre?: string;
}